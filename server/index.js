import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/* eslint-disable no-undef */

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const usersDbPath = path.join(__dirname, 'users.json');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json({ limit: '1mb' }));

// Environment variables expected (server-side):
// - GOOGLE_API_KEY (or GEMINI key for AI features)

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || process.env.VITE_GOOGLE_API_KEY || process.env.REACT_APP_GOOGLE_API_KEY || '';

// ============ PERSISTENT USER DATABASE ============

// Load users from file
const loadUsers = () => {
  try {
    if (fs.existsSync(usersDbPath)) {
      const data = fs.readFileSync(usersDbPath, 'utf8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error loading users:', err.message);
  }
  return [];
};

// Save users to file
const saveUsers = (users) => {
  try {
    fs.writeFileSync(usersDbPath, JSON.stringify(users, null, 2));
    console.log('Users saved to database');
  } catch (err) {
    console.error('Error saving users:', err.message);
  }
};

// Initialize database on startup
const initializeDatabase = () => {
  if (!fs.existsSync(usersDbPath)) {
    const defaultUsers = [
      {
        id: 'demo-user-001',
        email: 'demo@example.com',
        password: 'Demo@123!',
        fullName: 'Demo User',
        createdAt: new Date().toISOString(),
        photoURL: null
      }
    ];
    saveUsers(defaultUsers);
    console.log('✓ Database initialized with demo user');
  }
};

// ============ AUTHENTICATION ENDPOINTS ============

app.post('/api/auth/signup', (req, res) => {
  try {
    const { email, password, fullName } = req.body;

    if (!email || !password || !fullName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const users = loadUsers();
    const userExists = users.find(u => u.email === email);

    if (userExists) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    const newUser = {
      id: `user_${Date.now()}`,
      email,
      password,
      fullName,
      createdAt: new Date().toISOString(),
      photoURL: null
    };

    users.push(newUser);
    saveUsers(users);

    return res.status(201).json({
      error: null,
      user: {
        id: newUser.id,
        email: newUser.email,
        fullName: newUser.fullName,
        createdAt: newUser.createdAt,
        photoURL: newUser.photoURL
      }
    });
  } catch (err) {
    console.error('Signup error:', err);
    return res.status(500).json({ error: 'Server error during signup' });
  }
});

app.post('/api/auth/login', (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    const users = loadUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    return res.status(200).json({
      error: null,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        createdAt: user.createdAt,
        photoURL: user.photoURL
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'Server error during login' });
  }
});

app.get('/api/auth/users', (req, res) => {
  try {
    const users = loadUsers();
    const sanitizedUsers = users.map(u => ({
      id: u.id,
      email: u.email,
      fullName: u.fullName,
      createdAt: u.createdAt
    }));
    return res.json({ users: sanitizedUsers });
  } catch (err) {
    console.error('Get users error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// ============ CODE COMPILATION ENDPOINT ============
// Simplified backend that forwards code to the Piston execution service.
// Piston supports a very wide range of languages (python3, java, cpp, c, javascript,
// go, rust, csharp, php, ruby, kotlin, swift, r, etc.).  No API key is required;
// the frontend merely needs to send the desired Piston language string.

app.post('/api/compile', async (req, res) => {
  try {
    const { code = '', language = 'python3', input = '' } = req.body;

    // forward request to Piston API
    const pistonResp = await axios.post('https://emkc.org/api/v2/piston/execute', {
      language,
      version: '*',
      files: [{ name: 'main', content: code }],
      stdin: input || '',
    }, { timeout: 20000 });

    const data = pistonResp.data;
    if (data.run) {
      return res.json({
        success: true,
        output: data.run.stdout || '',
        error: data.run.stderr || '',
        executionTime: data.run.time || '',
      });
    }

    if (data.compile) {
      return res.json({ success: false, output: '', error: data.compile.stderr || '' });
    }

    return res.status(500).json({ success: false, error: 'Unexpected response from compiler backend' });
  } catch (err) {
    console.error('Compile error', err.message || err);
    return res.status(500).json({ success: false, error: err.message || 'Server error' });
  }
});

app.post('/api/generate', async (req, res) => {
  try {
    const { message = '' } = req.body;
    if (!message) return res.status(400).json({ success: false, error: 'Missing message' });

    if (!GOOGLE_API_KEY) {
      return res.status(400).json({ success: false, error: 'Google/Gemini API key missing on server.' });
    }

    // Basic call to Google Generative Text API (text-bison example) - adapt model name if needed
    const endpoint = `https://generative.googleapis.com/v1beta2/models/text-bison-001:generate?key=${GOOGLE_API_KEY}`;
    const body = {
      prompt: { text: `User: ${message}\nAssistant:` },
      maxOutputTokens: 512
    };

    const pResp = await axios.post(endpoint, body, { headers: { 'Content-Type': 'application/json' } });
    const data = pResp.data;

    // Extract text
    const text = (data?.candidates && data.candidates[0]?.content) || data?.output?.[0]?.content || data?.response || '';
    return res.json({ success: true, output: String(text) });
  } catch (err) {
    console.error('Generate proxy error', err?.response?.data || err.message || err);
    return res.status(500).json({ success: false, error: 'Server generation error' });
  }
});

// ============ DELETE USER ENDPOINT ============
app.post('/api/delete-user', (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: 'User ID required' });
    }

    // Load users from file
    let users = loadUsers();

    // Find user index
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Remove user from array
    users.splice(userIndex, 1);

    // Save back to file
    fs.writeFileSync(usersDbPath, JSON.stringify(users, null, 2));

    console.log(`✅ User deleted: ${userId}`);
    return res.json({ success: true, message: 'User deleted successfully' });
  } catch (err) {
    console.error('Delete user error:', err.message);
    return res.status(500).json({ error: 'Failed to delete user', details: err.message });
  }
});

app.listen(port, () => {
  initializeDatabase();
  console.log(`Proxy server listening on http://localhost:${port}`);
  console.log(`Users database: ${usersDbPath}`);
});

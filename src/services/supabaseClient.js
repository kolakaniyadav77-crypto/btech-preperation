// supabaseClient.js - Supabase Configuration
// Note: For production, use environment variables
// For now, we'll use mock authentication that simulates Supabase behavior

// Mock Supabase Client (For demonstration - replace with real Supabase credentials)
class MockSupabaseClient {
  constructor() {
    this.users = this.loadUsersFromStorage();
    this.auth = {
      signUp: this.signUp.bind(this),
      signIn: this.signIn.bind(this),
      signOut: this.signOut.bind(this),
      getUser: this.getUser.bind(this)
    };
  }

  loadUsersFromStorage() {
    const stored = localStorage.getItem('education_path_users');
    return stored ? JSON.parse(stored) : [];
  }

  saveUsersToStorage() {
    localStorage.setItem('education_path_users', JSON.stringify(this.users));
  }

  signUp = async (email, password, fullName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userExists = this.users.find(u => u.email === email);
        if (userExists) {
          resolve({ 
            data: null,
            error: { message: 'User already exists' } 
          });
        } else {
          const newUser = {
            id: Math.random().toString(36).substr(2, 9),
            email,
            password,
            fullName,
            createdAt: new Date().toISOString()
          };
          this.users.push(newUser);
          this.saveUsersToStorage();
          resolve({ 
            data: { 
              user: { 
                id: newUser.id, 
                email: newUser.email,
                user_metadata: { full_name: fullName }
              } 
            },
            error: null
          });
        }
      }, 500);
    });
  }

  signIn = async (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = this.users.find(u => u.email === email && u.password === password);
        if (user) {
          resolve({ 
            data: { 
              user: { 
                id: user.id, 
                email: user.email,
                user_metadata: { full_name: user.fullName }
              },
              session: {
                access_token: Math.random().toString(36).substr(2)
              }
            },
            error: null
          });
        } else {
          resolve({ 
            data: null,
            error: { message: 'Invalid email or password' } 
          });
        }
      }, 500);
    });
  }

  signOut = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ data: {} }), 300);
    });
  }

  getUser = async () => {
    const storedUser = localStorage.getItem('education_path_current_user');
    if (storedUser) {
      return { data: { user: JSON.parse(storedUser) } };
    }
    return { data: { user: null } };
  }
}

// Initialize the mock client
const supabase = new MockSupabaseClient();

export default supabase;

/* 
  TO USE REAL SUPABASE:
  1. Install supabase client: npm install @supabase/supabase-js
  2. Create account at https://supabase.com
  3. Replace the above code with:

  import { createClient } from '@supabase/supabase-js';

  const SUPABASE_URL = 'your_supabase_url';
  const SUPABASE_KEY = 'your_supabase_key';

  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  export default supabase;
*/

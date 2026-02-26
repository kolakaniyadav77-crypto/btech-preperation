import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Auth Context
const AuthContext = createContext();

// Base URL for backend API. Defaults to `/api` so that the dev server can
// proxy requests through to port 9000. In production you may override this via
// VITE_API_BASE_URL (set in .env or on the hosting platform); values lacking a
// leading slash will be normalized automatically.
let API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';
if (!API_BASE_URL.startsWith('/')) {
  API_BASE_URL = '/' + API_BASE_URL;
}

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is already logged in on mount
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const storedUser = localStorage.getItem('education_path_current_user');
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        setCurrentUser(userData);
      }
    } catch (err) {
      console.error('Error checking user:', err);
      localStorage.removeItem('education_path_current_user');
    } finally {
      setLoading(false);
    }
  };

  // Sign Up Function - with Spring Boot Backend
  const signUp = async (email, password, fullName) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          fullName
        })
      });

      let data = {};
      try {
        data = await response.json();
      } catch (err) {
        console.warn('Signup response not JSON:', err, 'status', response.status);
      }

      if (!response.ok) {
        console.error('Signup error:', data.message || response.status);
        setError(data.message || `HTTP ${response.status}`);
        return { error: { message: data.message || 'Signup failed' } };
      }

      const userData = {
        id: data.id,
        email: data.email,
        fullName: data.fullName,
        createdAt: data.createdAt,
        photoURL: data.photoURL || null
      };

      localStorage.setItem('education_path_current_user', JSON.stringify(userData));
      // ALWAYS clear welcome flag on signup so it shows on next login
      localStorage.removeItem('education_path_welcome_seen');
      console.log('✅ Welcome flag cleared for signup');
      
      // Initialize user progress - must match progressTracker.js sections
      const userProgress = {
        sections: {
          placement: 0,
          qar: 0,
          vacr: 0,
          dsa: 0,
          programming: 0,
          blueprint: 0,
          careers: 0,
          resume: 0,
          jobsearch: 0,
          company: 0,
          exams: 0,
          aiml: 0,
          powerbi: 0,
          dataeng: 0,
          webframes: 0,
          mobile: 0,
          devops: 0,
          chatbot: 0
        },
        totalProgress: 0,
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem(`education_path_progress_${userData.id}`, JSON.stringify(userProgress));
      setCurrentUser(userData);
      console.log('✅ User state updated, currentUser is now set');
      setError(null);
      return { error: null };
    } catch (err) {
      const errorMsg = err?.message || 'Sign up failed';
      console.error('❌ Signup exception:', errorMsg);
      setError(errorMsg);
      return { error: { message: errorMsg } };
    } finally {
      setLoading(false);
    }
  };

  // Sign In Function - with Spring Boot Backend
  const signIn = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      let data = {};
      try {
        data = await response.json();
      } catch (err) {
        console.warn('Login response not JSON:', err, 'status', response.status);
      }

      if (!response.ok) {
        console.error('Login error:', data.message || response.status);
        setError(data.message || `HTTP ${response.status}`);
        return { error: { message: data.message || 'Invalid email or password' } };
      }

      const userData = {
        id: data.id,
        email: data.email,
        fullName: data.fullName,
        createdAt: data.createdAt,
        photoURL: data.photoURL || null
      };

      localStorage.setItem('education_path_current_user', JSON.stringify(userData));
      // ALWAYS clear welcome flag on login so it shows right away
      localStorage.removeItem('education_path_welcome_seen');
      
      // Load or initialize user progress
      const existingProgress = localStorage.getItem(`education_path_progress_${userData.id}`);
      if (!existingProgress) {
        const userProgress = {
          sections: {
            placement: 0,
            qar: 0,
            vacr: 0,
            dsa: 0,
            programming: 0,
            blueprint: 0,
            careers: 0,
            resume: 0,
            jobsearch: 0,
            company: 0,
            exams: 0
          },
          totalProgress: 0,
          lastUpdated: new Date().toISOString()
        };
        localStorage.setItem(`education_path_progress_${userData.id}`, JSON.stringify(userProgress));
      }
      
      setCurrentUser(userData);
      setError(null);
      return { error: null };
    } catch (err) {
      const errorMsg = err?.message || 'Login failed';
      setError(errorMsg);
      return { error: { message: errorMsg } };
    } finally {
      setLoading(false);
    }
  };

  // Sign Out Function
  const signOut = async () => {
    setLoading(true);
    try {
      localStorage.removeItem('education_path_current_user');
      setCurrentUser(null);
      setError(null);
      return { data: {} };
    } catch (err) {
      const errorMsg = err?.message || 'Sign out failed';
      setError(errorMsg);
      return { error: err };
    } finally {
      setLoading(false);
    }
  };

  // Delete User Function
  const deleteUser = async (userId) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/auth/delete-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId })
      });

      if (!response.ok) {
        console.error('Backend delete failed:', response.statusText);
        return { error: { message: 'Failed to delete user' } };
      }

      // If deleting current user, sign them out
      if (currentUser?.id === userId) {
        await signOut();
      }

      return { error: null };
    } catch (err) {
      const errorMsg = err?.message || 'Delete user failed';
      setError(errorMsg);
      return { error: { message: errorMsg } };
    } finally {
      setLoading(false);
    }
  };

  const value = {
    currentUser,
    loading,
    error,
    signUp,
    signIn,
    signOut,
    deleteUser,
    isAuthenticated: !!currentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use Auth Context
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

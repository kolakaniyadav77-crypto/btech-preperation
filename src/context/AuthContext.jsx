import React, { createContext, useContext, useState, useEffect } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

// Safe JSON parser that handles non-JSON responses
const parseJSON = async (response) => {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch (e) {
    // Return error text if not valid JSON
    return { message: text || 'Server error' };
  }
};

const AuthContext = createContext({
  currentUser: null,
  loading: true,
  error: null,
  isAuthenticated: false,
  signUp: async () => ({ error: null }),
  signIn: async () => ({ error: null }),
  signOut: async () => ({ error: null }),
  deleteUser: async () => ({ error: null }),
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is already logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const user = localStorage.getItem('currentUser');
        
        if (token && user) {
          setCurrentUser(JSON.parse(user));
        }
      } catch (err) {
        console.error('Auth check failed:', err);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const signUp = async (email, password, fullName) => {
    try {
      setError(null);
      const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, fullName })
      });

      const data = await parseJSON(response);

      if (!response.ok) {
        const errMsg = data.message || data.error || 'Signup failed';
        return { error: errMsg };
      }

      // Store token and user info
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('currentUser', JSON.stringify(data.user));
      setCurrentUser(data.user);
      
      return { error: null };
    } catch (err) {
      const errMsg = err.message || 'Signup error';
      setError(errMsg);
      return { error: errMsg };
    }
  };

  const signIn = async (email, password) => {
    try {
      setError(null);
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await parseJSON(response);

      if (!response.ok) {
        const errMsg = data.message || data.error || 'Login failed';
        return { error: errMsg };
      }

      // Store token and user info
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('currentUser', JSON.stringify(data.user));
      setCurrentUser(data.user);
      
      return { error: null };
    } catch (err) {
      const errMsg = err.message || 'Login error';
      setError(errMsg);
      return { error: errMsg };
    }
  };

  const signOut = async () => {
    try {
      localStorage.removeItem('authToken');
      localStorage.removeItem('currentUser');
      setCurrentUser(null);
      return { error: null };
    } catch (err) {
      return { error: err.message };
    }
  };

  const deleteUser = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) return { error: 'Not authenticated' };

      const response = await fetch(`${API_BASE_URL}/api/auth/user`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await parseJSON(response);

      if (!response.ok) {
        const errMsg = data.message || data.error || 'Delete failed';
        return { error: errMsg };
      }

      localStorage.removeItem('authToken');
      localStorage.removeItem('currentUser');
      setCurrentUser(null);
      return { error: null };
    } catch (err) {
      return { error: err.message };
    }
  };

  const value = {
    currentUser,
    loading,
    error,
    isAuthenticated: !!currentUser,
    signUp,
    signIn,
    signOut,
    deleteUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use Auth Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

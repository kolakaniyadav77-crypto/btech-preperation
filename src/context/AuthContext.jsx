import React, { createContext, useContext, useState, useEffect } from 'react';
import supabase from '../services/supabaseClient';

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is already logged in on mount
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = () => {
    const storedUser = localStorage.getItem('education_path_current_user');
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser));
      } catch (err) {
        console.error('Error parsing stored user:', err);
        localStorage.removeItem('education_path_current_user');
      }
    }
    setLoading(false);
  };

  // Sign Up Function
  const signUp = async (email, password, fullName) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: signUpError } = await supabase.auth.signUp(email, password, fullName);
      
      if (signUpError) {
        setError(signUpError.message);
        return { error: signUpError };
      }

      // Auto sign in after registration
      const userData = {
        id: data.user.id,
        email: data.user.email,
        fullName: fullName,
        createdAt: new Date().toISOString(),
        isNewUser: true,
        showWelcome: true
      };

      localStorage.setItem('education_path_current_user', JSON.stringify(userData));
      // Clear welcome seen flag to show welcome on signup
      localStorage.removeItem('education_path_welcome_seen');
      // Initialize user progress at 0
      const userProgress = {
        sections: {
          placement: 0,
          qar: 0,
          varc: 0,
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
      setCurrentUser(userData);
      return { error: null };
    } catch (err) {
      const errorMsg = err.message || 'Sign up failed';
      setError(errorMsg);
      return { error: { message: errorMsg } };
    } finally {
      setLoading(false);
    }
  };

  // Sign In Function
  const signIn = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: signInError } = await supabase.auth.signIn(email, password);
      
      if (signInError) {
        setError(signInError.message);
        return { error: signInError };
      }

      const userData = {
        id: data.user.id,
        email: data.user.email,
        fullName: data.user.user_metadata?.full_name || email.split('@')[0],
        createdAt: new Date().toISOString(),
        showWelcome: true
      };

      localStorage.setItem('education_path_current_user', JSON.stringify(userData));
      // Clear welcome seen flag to show welcome on login
      localStorage.removeItem('education_path_welcome_seen');
      // Initialize or load user progress
      const existingProgress = localStorage.getItem(`education_path_progress_${userData.id}`);
      if (!existingProgress) {
        const userProgress = {
          sections: {
            placement: 0,
            qar: 0,
            varc: 0,
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
      return { error: null };
    } catch (err) {
      const errorMsg = err.message || 'Sign in failed';
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
      await supabase.auth.signOut();
      localStorage.removeItem('education_path_current_user');
      setCurrentUser(null);
      setError(null);
      return { data: {} };
    } catch (err) {
      const errorMsg = err.message || 'Sign out failed';
      setError(errorMsg);
      return { error: err };
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
    isAuthenticated: !!currentUser
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

export default AuthContext;

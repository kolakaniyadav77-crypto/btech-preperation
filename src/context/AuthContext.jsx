import React, { createContext, useContext } from 'react';

// Auth context still exists for compatibility but always reports authenticated
const AuthContext = createContext({
  currentUser: { id: 'guest' },
  loading: false,
  error: null,
  isAuthenticated: true,
  signUp: async () => ({ error: null }),
  signIn: async () => ({ error: null }),
  signOut: async () => ({ error: null }),
  deleteUser: async () => ({ error: null }),
});

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{
      currentUser: { id: 'guest' },
      loading: false,
      error: null,
      isAuthenticated: true,
      signUp: async () => ({ error: null }),
      signIn: async () => ({ error: null }),
      signOut: async () => ({ error: null }),
      deleteUser: async () => ({ error: null }),
    }}>
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

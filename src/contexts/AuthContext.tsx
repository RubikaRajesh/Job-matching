import React, { createContext, useState, useContext, useEffect } from 'react';

interface AuthContextType {
  token: string | null;
  userType: 'candidate' | 'company' | null;
  login: (token: string, userType: 'candidate' | 'company') => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [userType, setUserType] = useState<'candidate' | 'company' | null>(null);

  useEffect(() => {
    if (token) {
      // Fetch user profile to get user type
      fetch('http://localhost:3001/api/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setUserType(data.user.userType);
        })
        .catch(() => {
          // If there's an error (e.g., invalid token), log out the user
          logout();
        });
    }
  }, [token]);

  const login = (newToken: string, newUserType: 'candidate' | 'company') => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setUserType(newUserType);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUserType(null);
  };

  return (
    <AuthContext.Provider value={{ token, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
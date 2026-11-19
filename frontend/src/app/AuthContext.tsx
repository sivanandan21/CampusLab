import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types/user';
import { authService } from '../services/authService';
import { MOCK_USER } from '../data/mockData';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (admissionNo: string, pass: string) => Promise<void>;
  logout: () => void;
  updateUserSemester: (sem: User['currentSemester']) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('campuslab_user');
    return saved ? JSON.parse(saved) : MOCK_USER;
  });
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('campuslab_token') || 'mock-token';
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleLogout = () => {
      setUser(null);
      setToken(null);
    };
    window.addEventListener('campuslab_logout', handleLogout);
    return () => window.removeEventListener('campuslab_logout', handleLogout);
  }, []);

  const login = async (admissionNo: string, pass: string) => {
    setIsLoading(true);
    try {
      const res = await authService.login(admissionNo, pass);
      const authToken = res.token || (res as any).access_token;
      setUser(res.user);
      setToken(authToken);
      localStorage.setItem('campuslab_user', JSON.stringify(res.user));
      localStorage.setItem('campuslab_token', authToken);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    setToken(null);
  };

  const updateUserSemester = (sem: User['currentSemester']) => {
    if (!user) return;
    const updated = { ...user, currentSemester: sem };
    setUser(updated);
    localStorage.setItem('campuslab_user', JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        updateUserSemester,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

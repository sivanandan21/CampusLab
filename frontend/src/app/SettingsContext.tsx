import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserPreferences } from '../types/user';
import { DEFAULT_PREFERENCES } from '../data/mockData';

interface SettingsContextType {
  preferences: UserPreferences;
  updatePreferences: (updates: Partial<UserPreferences>) => void;
  terminalThemeColors: {
    background: string;
    foreground: string;
    cursor: string;
    selectionBackground: string;
  };
}

const THEME_MAP = {
  'Dark Navy': {
    background: '#0B1120',
    foreground: '#F8FAFC',
    cursor: '#38BDF8',
    selectionBackground: 'rgba(56, 189, 248, 0.3)',
  },
  'Monokai': {
    background: '#272822',
    foreground: '#F8F8F2',
    cursor: '#F8F8F0',
    selectionBackground: 'rgba(255, 255, 255, 0.2)',
  },
  'Solarized Dark': {
    background: '#002B36',
    foreground: '#839496',
    cursor: '#93A1A1',
    selectionBackground: 'rgba(7, 54, 66, 0.5)',
  },
  'Dracula': {
    background: '#282A36',
    foreground: '#F8F8F2',
    cursor: '#F8F8F2',
    selectionBackground: 'rgba(68, 71, 90, 0.5)',
  },
  'Github Dark': {
    background: '#0D1117',
    foreground: '#C9D1D9',
    cursor: '#58A6FF',
    selectionBackground: 'rgba(88, 166, 255, 0.3)',
  },
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<UserPreferences>(() => {
    const saved = localStorage.getItem('campuslab_preferences');
    return saved ? JSON.parse(saved) : DEFAULT_PREFERENCES;
  });

  const updatePreferences = (updates: Partial<UserPreferences>) => {
    setPreferences((prev) => {
      const next = { ...prev, ...updates };
      localStorage.setItem('campuslab_preferences', JSON.stringify(next));
      return next;
    });
  };

  const terminalThemeColors = THEME_MAP[preferences.xtermTheme] || THEME_MAP['Dark Navy'];

  return (
    <SettingsContext.Provider
      value={{
        preferences,
        updatePreferences,
        terminalThemeColors,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error('useSettings must be used within a SettingsProvider');
  return context;
};

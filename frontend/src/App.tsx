import React from 'react';
import { AuthProvider } from './app/AuthContext';
import { SettingsProvider } from './app/SettingsContext';
import { ToastProvider } from './app/ToastProvider';
import AppRouter from './app/Router';

export default function App() {
  return (
    <AuthProvider>
      <SettingsProvider>
        <ToastProvider>
          <AppRouter />
        </ToastProvider>
      </SettingsProvider>
    </AuthProvider>
  );
}

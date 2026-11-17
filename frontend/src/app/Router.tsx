import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import LoginPage from '../features/auth/LoginPage';
import DashboardPage from '../features/dashboard/DashboardPage';
import SemesterLabsPage from '../features/labs/SemesterLabsPage';
import ExperimentDetailPage from '../features/labs/ExperimentDetailPage';
import LabWorkspacePage from '../features/terminal/LabWorkspacePage';
import SubmissionsPage from '../features/submissions/SubmissionsPage';
import ResultsPage from '../features/results/ResultsPage';
import KtuSyllabusPage from '../features/syllabus/KtuSyllabusPage';
import UserSettingsPage from '../features/settings/UserSettingsPage';
import { useAuth } from './AuthContext';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Auth Route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Full Viewport Workspace Route */}
        <Route
          path="/workspace/:sessionId"
          element={
            <ProtectedRoute>
              <LabWorkspacePage />
            </ProtectedRoute>
          }
        />

        {/* Master Shell Routes */}
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/labs" element={<SemesterLabsPage />} />
          <Route path="/labs/:courseId/:expId" element={<ExperimentDetailPage />} />
          <Route path="/submissions" element={<SubmissionsPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/syllabus" element={<KtuSyllabusPage />} />
          <Route path="/settings" element={<UserSettingsPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

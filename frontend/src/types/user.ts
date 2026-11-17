export interface User {
  id: string;
  admissionNo: string;
  name: string;
  ktuRegId: string;
  branch: string;
  scheme: string;
  currentSemester: 'S1' | 'S2' | 'S3' | 'S4' | 'S5' | 'S6' | 'S7' | 'S8';
  avatar?: string;
  email: string;
  role: 'student' | 'faculty' | 'admin';
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface UserPreferences {
  xtermTheme: 'Dark Navy' | 'Monokai' | 'Solarized Dark' | 'Dracula' | 'Github Dark';
  fontSize: number;
  autoReconnect: boolean;
  copyOnSelect: boolean;
  deadlineReminders: boolean;
  ciaAlerts: boolean;
}

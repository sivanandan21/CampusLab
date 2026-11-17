export type SemesterId = 'S1' | 'S2' | 'S3' | 'S4' | 'S5' | 'S6' | 'S7' | 'S8';

export interface Experiment {
  id: string;
  expNumber: number;
  title: string;
  question: string;
  durationMinutes: number;
  environment: string;
  objectives: string[];
  practiceSkills: { name: string; tag: string; iconType: string }[];
  checklistSteps: { id: string; stepNumber: number; label: string; completed?: boolean }[];
  submissionRequirements: {
    fileTypes: string[];
    description: string;
    acceptedFormats: string;
  };
  sampleStarterCode?: string;
  solutionHint?: string;
  status: 'Ready' | 'In Progress' | 'Completed' | 'Pending';
  initialExecutionCmd?: string;
  initialExecutionOutput?: string;
}

export interface Course {
  code: string;
  title: string;
  semester: SemesterId;
  credits: number;
  ltpr: string;
  evaluation: string;
  category: 'ESC Practical' | 'PC Practical' | 'PC-PBL' | 'Project' | 'Seminar';
  description: string;
  topics: string[];
  experimentsCount: number;
  completedExperiments: number;
  progressPercentage: number;
  imageKey: string;
  activeSessionId?: string;
  dueInfo?: {
    text: string;
    type: 'urgent' | 'warning' | 'normal';
    taskTitle: string;
    estimatedHours: number;
  };
  experiments: Experiment[];
}

export interface SemesterData {
  id: SemesterId;
  name: string;
  courses: Course[];
}

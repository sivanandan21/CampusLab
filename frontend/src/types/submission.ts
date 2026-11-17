export interface RubricScore {
  name: string;
  maxScore: number;
  obtainedScore: number;
}

export interface Submission {
  id: string;
  courseCode: string;
  courseTitle: string;
  experimentId: string;
  experimentTitle: string;
  submittedAt: string;
  fileCount: number;
  grade: string; // e.g. 'S', 'A+', 'A'
  score: number; // e.g. 46
  maxScore: number; // e.g. 50
  autoCheckPassed: boolean;
  facultyFeedback?: {
    comment: string;
    facultyName: string;
    avatar?: string;
  };
  rubrics?: RubricScore[];
  codeSnippetPreview?: string;
  language?: string;
}

export interface StudentCiaResult {
  semester: string;
  sgpa: number;
  gradeLetter: string;
  totalCiaScore: number;
  maxCiaScore: number;
  experimentsPassed: number;
  totalExperiments: number;
  courseResults: {
    courseCode: string;
    courseTitle: string;
    gradeLetter: string;
    ciaScore: number;
    maxScore: number;
    rubrics: RubricScore[];
  }[];
  recentSubmissions: {
    id: string;
    experimentTitle: string;
    courseCode: string;
    ciaScore: number;
    maxScore: number;
    grade: string;
    status: 'Completed' | 'Pending';
  }[];
}

import { Submission, StudentCiaResult } from '../types/submission';
import { User, UserPreferences } from '../types/user';

export const MOCK_USER: User = {
  id: 'usr-24cs0142',
  admissionNo: '24CS0142',
  name: 'Adarsh S',
  ktuRegId: 'PKD24CS042',
  branch: 'Computer Science and Engineering',
  scheme: 'KTU 2024 Scheme',
  currentSemester: 'S4',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  email: 'adarsh.s.cse24@gec.ac.in',
  role: 'student',
};

export const DEFAULT_PREFERENCES: UserPreferences = {
  xtermTheme: 'Dark Navy',
  fontSize: 14,
  autoReconnect: true,
  copyOnSelect: true,
  deadlineReminders: true,
  ciaAlerts: true,
};

export const MOCK_SUBMISSIONS: Submission[] = [
  {
    id: 'sub-01',
    courseCode: 'PCCSL407',
    courseTitle: 'Operating Systems Lab',
    experimentId: 'exp-03',
    experimentTitle: 'PCCSL407 Exp 03: CPU Scheduling',
    submittedAt: 'Oct 24, 2026',
    fileCount: 2,
    grade: 'S',
    score: 46,
    maxScore: 50,
    autoCheckPassed: true,
    facultyFeedback: {
      comment: 'Great job on the clean query optimization and CPU burst timing handling!',
      facultyName: 'Dr. Priya K.',
    },
    codeSnippetPreview: `#include <stdio.h>
struct Process { int pid, bt, wt, tat; };
void calculateAverages(struct Process p[], int n) {
    p[0].wt = 0;
    for(int i = 1; i < n; i++) {
        p[i].wt = p[i-1].wt + p[i-1].bt;
    }
}`,
    language: 'c',
    rubrics: [
      { name: 'Execution & Algorithm', maxScore: 20, obtainedScore: 19 },
      { name: 'Code Quality & Documentation', maxScore: 20, obtainedScore: 18 },
      { name: 'Viva Voce', maxScore: 10, obtainedScore: 9 },
    ],
  },
  {
    id: 'sub-02',
    courseCode: 'PCCSL408',
    courseTitle: 'DBMS Lab',
    experimentId: 'dbms-exp-04',
    experimentTitle: 'PCCSL408 Exp 04: SQL Joins',
    submittedAt: 'Oct 12, 2026',
    fileCount: 1,
    grade: 'A+',
    score: 48,
    maxScore: 50,
    autoCheckPassed: true,
    facultyFeedback: {
      comment: 'Excellent use of indexing and subquery optimization. Keep it up!',
      facultyName: 'Prof. Rajesh M.',
    },
    codeSnippetPreview: `SELECT e.emp_id, e.first_name, d.dept_name, s.salary
FROM employees e
INNER JOIN departments d ON e.dept_id = d.dept_id
LEFT JOIN salaries s ON e.emp_id = s.emp_id
WHERE s.salary > (SELECT AVG(salary) FROM salaries);`,
    language: 'sql',
    rubrics: [
      { name: 'Query Correctness', maxScore: 20, obtainedScore: 19 },
      { name: 'Schema Optimization', maxScore: 20, obtainedScore: 19 },
      { name: 'Viva Voce', maxScore: 10, obtainedScore: 10 },
    ],
  },
];

export const MOCK_CIA_RESULT: StudentCiaResult = {
  semester: 'Semester 4 (Current)',
  sgpa: 9.2,
  gradeLetter: 'S',
  totalCiaScore: 91,
  maxCiaScore: 100,
  experimentsPassed: 18,
  totalExperiments: 20,
  courseResults: [
    {
      courseCode: 'PCCSL407',
      courseTitle: 'Operating Systems Lab',
      gradeLetter: 'S',
      ciaScore: 46,
      maxScore: 50,
      rubrics: [
        { name: 'Execution', maxScore: 20, obtainedScore: 19 },
        { name: 'Code Quality & Documentation', maxScore: 20, obtainedScore: 18 },
        { name: 'Viva Voce', maxScore: 10, obtainedScore: 9 },
      ],
    },
    {
      courseCode: 'PCCSL408',
      courseTitle: 'DBMS Lab',
      gradeLetter: 'A+',
      ciaScore: 45,
      maxScore: 50,
      rubrics: [
        { name: 'Execution', maxScore: 20, obtainedScore: 18 },
        { name: 'Code Quality & Documentation', maxScore: 20, obtainedScore: 18 },
        { name: 'Viva Voce', maxScore: 10, obtainedScore: 9 },
      ],
    },
  ],
  recentSubmissions: [
    {
      id: 'res-01',
      experimentTitle: 'Exp 8: Inter-process Communication',
      courseCode: 'PCCSL407',
      ciaScore: 9.5,
      maxScore: 10,
      grade: 'S',
      status: 'Completed',
    },
    {
      id: 'res-02',
      experimentTitle: 'Exp 7: Process Scheduling',
      courseCode: 'PCCSL407',
      ciaScore: 9.0,
      maxScore: 10,
      grade: 'A+',
      status: 'Completed',
    },
    {
      id: 'res-03',
      experimentTitle: 'Exp 5: SQL Joins and Subqueries',
      courseCode: 'PCCSL408',
      ciaScore: 9.0,
      maxScore: 10,
      grade: 'A+',
      status: 'Completed',
    },
  ],
};

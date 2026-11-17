import { User, UserPreferences } from '../types/user';
import { Course, Experiment, SemesterId } from '../types/lab';
import { LabSession } from '../types/session';
import { Submission, StudentCiaResult } from '../types/submission';
import { KTU_2024_CSE_COURSES } from '../data/ktu2024CseLabs';
import { MOCK_USER, DEFAULT_PREFERENCES, MOCK_SUBMISSIONS, MOCK_CIA_RESULT } from '../data/mockData';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class MockApiService {
  private user: User = { ...MOCK_USER };
  private preferences: UserPreferences = { ...DEFAULT_PREFERENCES };
  private submissions: Submission[] = [...MOCK_SUBMISSIONS];
  private activeSession: LabSession | null = {
    sessionId: 's4-cse-os-lab',
    courseCode: 'PCCSL407',
    courseTitle: 'Operating Systems Lab',
    experimentId: 'exp-04',
    experimentTitle: 'Exp 04: Process Scheduling & Fork System Calls',
    semester: 'S4',
    batch: 'Batch A',
    status: 'READY',
    startedAt: new Date(Date.now() - 18 * 60 * 1000).toISOString(),
    expiresAt: new Date(Date.now() + 42 * 60 * 1000).toISOString(),
    timeRemainingSeconds: 42 * 60 + 18,
    containerId: 'cnt-ktu-os-94812',
    ptyCols: 100,
    ptyRows: 30,
    host: 'campuslab.ktu.edu',
  };

  async login(admissionNo: string, _password: string): Promise<{ user: User; token: string }> {
    await delay(350);
    this.user = {
      ...MOCK_USER,
      admissionNo: admissionNo || '24CS0142',
    };
    return {
      user: this.user,
      token: 'mock-jwt-token-campuslab-ktu2024',
    };
  }

  async getCurrentUser(): Promise<User> {
    await delay(150);
    return this.user;
  }

  async getCoursesBySemester(semester: SemesterId): Promise<Course[]> {
    await delay(150);
    return KTU_2024_CSE_COURSES.filter((c) => c.semester === semester);
  }

  async getAllCourses(): Promise<Course[]> {
    await delay(150);
    return KTU_2024_CSE_COURSES;
  }

  async getCourseByCode(courseCode: string): Promise<Course | undefined> {
    await delay(100);
    return KTU_2024_CSE_COURSES.find((c) => c.code.toLowerCase() === courseCode.toLowerCase());
  }

  async getExperiment(courseCode: string, expId: string): Promise<{ course: Course; experiment: Experiment } | null> {
    await delay(150);
    const course = KTU_2024_CSE_COURSES.find((c) => c.code.toLowerCase() === courseCode.toLowerCase());
    if (!course) return null;
    const experiment = course.experiments.find((e) => e.id === expId) || course.experiments[0];
    if (!experiment) return null;
    return { course, experiment };
  }

  async startLabSession(courseCode: string, experimentId: string): Promise<LabSession> {
    await delay(500);
    const course = await this.getCourseByCode(courseCode);
    const exp = course?.experiments.find((e) => e.id === experimentId) || course?.experiments[0];

    const session: LabSession = {
      sessionId: `sess-${courseCode.toLowerCase()}-${experimentId}`,
      courseCode: courseCode.toUpperCase(),
      courseTitle: course?.title || 'Laboratory',
      experimentId: experimentId,
      experimentTitle: exp?.title || 'Experiment Task',
      semester: course?.semester || 'S4',
      batch: 'Batch A',
      status: 'READY',
      startedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 45 * 60 * 1000).toISOString(),
      timeRemainingSeconds: 45 * 60,
      containerId: `cnt-${Math.random().toString(36).substring(2, 9)}`,
      ptyCols: 100,
      ptyRows: 30,
      host: 'campuslab.ktu.edu',
    };

    this.activeSession = session;
    return session;
  }

  async getActiveSession(): Promise<LabSession | null> {
    await delay(100);
    return this.activeSession;
  }

  async endSession(_sessionId: string): Promise<{ success: boolean }> {
    await delay(200);
    this.activeSession = null;
    return { success: true };
  }

  async getSubmissions(): Promise<Submission[]> {
    await delay(150);
    return this.submissions;
  }

  async submitLab(data: {
    courseCode: string;
    experimentId: string;
    files: { name: string; content?: string }[];
  }): Promise<Submission> {
    await delay(600);
    const course = await this.getCourseByCode(data.courseCode);
    const exp = course?.experiments.find((e) => e.id === data.experimentId);

    const newSub: Submission = {
      id: `sub-${Date.now()}`,
      courseCode: data.courseCode,
      courseTitle: course?.title || 'Laboratory',
      experimentId: data.experimentId,
      experimentTitle: exp ? `${data.courseCode} Exp 0${exp.expNumber}: ${exp.title}` : `${data.courseCode} Lab Submission`,
      submittedAt: 'Just now',
      fileCount: data.files.length || 1,
      grade: 'S',
      score: 48,
      maxScore: 50,
      autoCheckPassed: true,
      facultyFeedback: {
        comment: 'Automated test suite passed 100%! Ready for viva voce evaluation.',
        facultyName: 'AutoGrader Engine',
      },
      rubrics: [
        { name: 'Execution & Algorithm', maxScore: 20, obtainedScore: 20 },
        { name: 'Code Quality & Documentation', maxScore: 20, obtainedScore: 19 },
        { name: 'Viva Voce', maxScore: 10, obtainedScore: 9 },
      ],
    };

    this.submissions.unshift(newSub);
    return newSub;
  }

  async getCiaResults(): Promise<StudentCiaResult> {
    await delay(150);
    return MOCK_CIA_RESULT;
  }

  async getPreferences(): Promise<UserPreferences> {
    await delay(100);
    return this.preferences;
  }

  async updatePreferences(prefs: Partial<UserPreferences>): Promise<UserPreferences> {
    await delay(200);
    this.preferences = { ...this.preferences, ...prefs };
    return this.preferences;
  }
}

export const mockApi = new MockApiService();

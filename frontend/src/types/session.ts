export type SessionStatus = 'IDLE' | 'REQUESTED' | 'PROVISIONING' | 'READY' | 'CONNECTED' | 'RECONNECTING' | 'EXPIRED' | 'TERMINATED';

export interface LabSession {
  sessionId: string;
  courseCode: string;
  courseTitle: string;
  experimentId: string;
  experimentTitle: string;
  semester: string;
  batch: string;
  status: SessionStatus;
  startedAt: string;
  expiresAt: string;
  timeRemainingSeconds: number;
  containerId: string;
  ptyCols: number;
  ptyRows: number;
  host: string;
}

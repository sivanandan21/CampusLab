import { mockApi } from './mockApi';
import { isMockEnabled, apiClient } from './apiClient';
import { LabSession } from '../types/session';

export const sessionService = {
  async getActiveSession(): Promise<LabSession | null> {
    if (isMockEnabled) {
      return mockApi.getActiveSession();
    }
    try {
      const res = await apiClient.get('/sessions/active');
      return res.data;
    } catch {
      return null;
    }
  },

  async startSession(courseCode: string, experimentId: string): Promise<LabSession> {
    if (isMockEnabled) {
      return mockApi.startLabSession(courseCode, experimentId);
    }
    const res = await apiClient.post('/sessions/start', { courseCode, experimentId });
    return res.data;
  },

  async endSession(sessionId: string): Promise<void> {
    if (isMockEnabled) {
      await mockApi.endSession(sessionId);
      return;
    }
    await apiClient.post(`/sessions/${sessionId}/end`);
  },
};

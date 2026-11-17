import { mockApi } from './mockApi';
import { isMockEnabled, apiClient } from './apiClient';
import { User } from '../types/user';

export const authService = {
  async login(admissionNo: string, password: string): Promise<{ user: User; token: string }> {
    if (isMockEnabled) {
      return mockApi.login(admissionNo, password);
    }
    const response = await apiClient.post('/auth/login', { admissionNo, password });
    return response.data;
  },

  async getCurrentUser(): Promise<User> {
    if (isMockEnabled) {
      return mockApi.getCurrentUser();
    }
    const response = await apiClient.get('/auth/me');
    return response.data;
  },

  async logout(): Promise<void> {
    localStorage.removeItem('campuslab_token');
    localStorage.removeItem('campuslab_user');
  },
};

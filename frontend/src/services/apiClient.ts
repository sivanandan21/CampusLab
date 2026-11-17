import axios, { AxiosInstance } from 'axios';

export const isMockEnabled = import.meta.env.VITE_USE_MOCK_API !== 'false';

export const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('campuslab_token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('campuslab_token');
      localStorage.removeItem('campuslab_user');
      window.dispatchEvent(new Event('campuslab_logout'));
    }
    return Promise.reject(error);
  }
);

export default apiClient;

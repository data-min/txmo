// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Replace with your actual API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the auth token in all requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const login = (credentials) => api.post('/auth/login', credentials);
export const register = (userData) => api.post('/auth/register', userData);
export const logout = () => api.post('/auth/logout');

export const getMessages = () => api.get('/messages');
export const sendMessage = (message) => api.post('/messages', message);

export const getMemos = () => api.get('/memos');
export const createMemo = (memo) => api.post('/memos', memo);
export const updateMemo = (id, memo) => api.put(`/memos/${id}`, memo);
export const deleteMemo = (id) => api.delete(`/memos/${id}`);

export const getSettings = () => api.get('/settings');
export const updateSettings = (settings) => api.put('/settings', settings);

export default api;
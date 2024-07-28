import { Env } from '@env';
import axios from 'axios';

import { getToken } from '@/core/auth/utils';

export const client = axios.create({
  baseURL: Env.API_URL,
});

client.interceptors.request.use(
  async (config) => {
    const token = getToken();
    console.log(config);

    if (token && token.access) {
      config.headers.Authorization = `Bearer ${token.access}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      throw error;
    }
    return Promise.reject(error);
  }
);

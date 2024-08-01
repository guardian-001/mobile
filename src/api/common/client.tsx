import { Env } from '@env';
import axios from 'axios';

import { getToken } from '@/core/auth/utils';
export const client = axios.create({
  baseURL: Env.API_URL,
});
client.interceptors.request.use(
  async (config) => {
    const token = getToken();
    if (token && token.access) {
      config.headers.Authorization = `Bearer ${token.access}`;
    }
    return config;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          throw new Error(
            'Unauthorized: You need to log in to access this resource.'
          );
        case 403:
          throw new Error(
            'Forbidden: You do not have permission to access this resource.'
          );
        case 404:
          throw new Error(
            'Not Found: The requested resource could not be found.'
          );
        case 500:
          throw new Error(
            'Internal Server Error: An error occurred on the server.'
          );
        default:
          throw new Error(`Unexpected error: ${error.response.status}`);
      }
    }
    return Promise.reject(error);
  }
);
client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          throw new Error(
            'Unauthorized: You need to log in to access this resource.'
          );
        case 403:
          throw new Error(
            'Forbidden: You do not have permission to access this resource.'
          );
        case 404:
          throw new Error(
            'Not Found: The requested resource could not be found.'
          );
        case 500:
          throw new Error(
            'Internal Server Error: An error occurred on the server.'
          );
        default:
          throw new Error(`Unexpected error: ${error.response.status}`);
      }
    }
    if (error.response?.status === 404) {
      throw error;
    }
    return Promise.reject(error);
  }
);

export const post = async (url: string, data: any) => {
  return client
    .post(url, data)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response?.data || error.message;
    });
};

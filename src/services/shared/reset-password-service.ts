import { client } from '@/api';
export const resetPassOTP = async (request: { email: string }) => {
  return client
    .post('/api/users/architect/send-reset-password-link/', request)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response?.data || error.message;
    });
};

export const forgetPass = async (request: void) => {
  return client
    .post('/api/users/archimatch-user/reset-password/', request)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response?.data || error.message;
    });
};

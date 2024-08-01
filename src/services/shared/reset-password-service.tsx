import { client } from '@/api';

// Define the service function for reset password OTP
export const resetPassOTP = async (request: { email: string }) => {
  return client
    .post('/api/users/architect/send-reset-password-link/', request)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response?.data || error.message;
    });
};

// Define the service function for forget password
export const forgetPass = async (request: void) => {
  return client
    .post('api/users/archimatch-user/reset-password/', request)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response?.data || error.message;
    });
};

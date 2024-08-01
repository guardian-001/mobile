import type { AxiosResponse } from 'axios';

import { client } from '@/api';
import { showErrorMessage, showSuccesMessage } from '@/shared/components';
import type { SendCodeRequest, VerificationCodeRequest } from '@/types';

export const sendPhoneVerificationCodeAsync = async (
  data: SendCodeRequest
): Promise<AxiosResponse> => {
  return client
    .post('/api/users/archimatch-user/send-code/', data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      showErrorMessage(error.response.data.errors[0].detail);
      throw error.response?.data || error.message;
    });
};

export const verifyPhoneVerificationCodAsync = async (
  data: VerificationCodeRequest
): Promise<AxiosResponse> => {
  return client
    .post('/api/users/archimatch-user/verify-code/', data)
    .then((response) => {
      showSuccesMessage(response.data.message);
      return response.data;
    })
    .catch((error) => {
      showErrorMessage(error.response.data.errors[0].detail);
      throw error.response?.data || error.message;
    });
};

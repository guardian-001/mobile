import type { AxiosResponse } from 'axios';

import { client } from '@/api';
import type { SendCodeRequest, VerificationCodeRequest } from '@/types';

export const sendPhoneVerificationCodeAsync = async (
  data: SendCodeRequest
): Promise<AxiosResponse> => {
  return client.post('/api/users/archimatch-user/send-code/', data);
};

export const verifyPhoneVerificationCodAsync = async (
  data: VerificationCodeRequest
): Promise<AxiosResponse> => {
  return client.post('/api/users/archimatch-user/verify-code/', data);
};

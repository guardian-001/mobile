import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { sendPhoneVerificationCodeAsync } from '@/services/shared/phone-verification-code-service';
import type { SendCodeRequest } from '@/types';

export const useSendPhoneVerificationCodeApi = createMutation<
  AxiosResponse,
  SendCodeRequest,
  AxiosError
>({
  mutationKey: ['SendPhoneVerificationCode'],
  mutationFn: sendPhoneVerificationCodeAsync,
});

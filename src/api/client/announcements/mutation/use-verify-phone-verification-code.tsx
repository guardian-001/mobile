import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { verifyPhoneVerificationCodAsync } from '@/services/shared/phone-verification-code-service';
import type { VerificationCodeRequest } from '@/types';

export const useVerifyPhoneVerificationCodeApi = createMutation<
  AxiosResponse,
  VerificationCodeRequest,
  AxiosError
>({
  mutationKey: ['VerifyPhoneVerificationCode'],
  mutationFn: verifyPhoneVerificationCodAsync,
});

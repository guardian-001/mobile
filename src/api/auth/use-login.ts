import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { postLogin } from '@/services/shared/auth-services';

import type { LoginRequest } from './types';

type Request = LoginRequest;

export const useLoginApi = createMutation<AxiosResponse, Request, AxiosError>({
  mutationFn: postLogin,
});

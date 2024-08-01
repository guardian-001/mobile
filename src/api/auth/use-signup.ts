import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';

import { postSignup } from '@/services/shared/auth-services';

import type { SignupRequest } from './types';

type Request = SignupRequest;

export const useSignupApi = createMutation<Response, Request, AxiosError>({
  mutationFn: postSignup,
});

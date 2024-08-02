import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';

import { postEmailCheck } from '@/services/shared/auth-services';

import type { LoginEmailRequest, LoginResponse } from '../types';

type Request = LoginEmailRequest;
type Response = LoginResponse;

export const useEmailCheckApi = createMutation<Response, Request, AxiosError>({
  mutationFn: postEmailCheck,
  onError: (error) => {
    return error;
  },
  onSuccess: (response) => {
    return { error: '', response };
  },
});

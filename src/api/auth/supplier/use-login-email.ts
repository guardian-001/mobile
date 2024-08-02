import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { postEmailCheck } from '@/services/shared/auth-services';

import type { LoginEmailRequest } from '../types';

type Request = LoginEmailRequest;

export const useEmailCheckApi = createMutation<
  AxiosResponse,
  Request,
  AxiosError
>({
  mutationFn: postEmailCheck,
  onError: (error) => {
    return error;
  },
  onSuccess: (response) => {
    return { error: '', response };
  },
});

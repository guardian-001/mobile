import type { AxiosError } from 'axios';
import { useRouter } from 'expo-router';
import { createMutation } from 'react-query-kit';

import { client } from '../common';
import type { SignupRequest } from './types';

type Request = SignupRequest;

export const useSignupApi = createMutation<Response, Request, AxiosError>({
  mutationFn: async (request) =>
    client({
      url: '/api/architect-request/create-architect-request/',
      method: 'POST',
      data: request,
    })
      .then((response) => {
        const router = useRouter();
        router.push('(architect)/(public)/login');
        return response.data;
      })
      .catch((response) => response.data),
});

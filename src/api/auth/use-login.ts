import type { AxiosError } from 'axios';
import { useRouter } from 'expo-router';
import { createMutation } from 'react-query-kit';

import { useAuth, useRouteName } from '@/core';

import { client } from '../common';
import type { LoginRequest, LoginResponse } from './types';

type Request = LoginRequest;
type Response = LoginResponse;

export const useLoginApi = createMutation<Response, Request, AxiosError>({
  mutationFn: async (request) =>
    client({
      url: '/api/users/login-email/',
      method: 'POST',
      data: request,
    })
      .then((response) => {
        const space = useRouteName();

        const router = useRouter();
        const signIn = useAuth.use.signIn();

        signIn({
          token: {
            access: response.data.access,
            refresh: response.data.refresh,
          },
          user: response.data.user,
        });
        router.push(`/(${space})/(private)/profile`);
        return response.data;
      })
      .catch((error) => {
        return error.message;
      }),
});

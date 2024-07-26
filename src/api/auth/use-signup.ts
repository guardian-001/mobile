import type { AxiosError } from 'axios';
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
      .then((response) => response.data)
      .catch((response) => response.data),
});

import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';

import { client } from '../common';
import type { LoginRequest, LoginResponse } from './types';

type Request = LoginRequest;
type Response = LoginResponse;

export const useLoginApi = createMutation<Response, Request, AxiosError>({
  mutationFn: async (request) =>
    client({
      url: 'api/users/login-email/',
      method: 'POST',
      data: request,
    })
      .then((response) => response.data)
      .catch((response) => response.data),
});

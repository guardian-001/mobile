import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';

import { client } from '../common';
import type { SignupRequest } from './types';

type Variables = SignupRequest;

export const useSignup = createMutation<Response, Variables, AxiosError>({
  mutationFn: async (variables) =>
    client({
      url: 'api/architect-request/create-architect-request/',
      method: 'POST',
      data: variables,
    }).then((response) => response.data),
});

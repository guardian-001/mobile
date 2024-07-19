import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';

import { client } from '../common';
import type { ForgetPassRequest } from './types';

type Response = ForgetPassRequest;
type Request = void;

export const useForgetPassApi = createMutation<Response, Request, AxiosError>({
  mutationFn: async (request) =>
    client({
      url: 'api/users/archimatch-user/reset-password/',
      method: 'POST',
      data: request,
    })
      .then((response) => response.data)
      .catch((response) => response.data),
});

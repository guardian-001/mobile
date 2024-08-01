import type { AxiosError } from 'axios';

import { client } from '@/api';
import type { LoginRequest, LoginResponse, SignupRequest } from '@/api/auth';
export async function postLogin(request: LoginRequest): Promise<LoginResponse> {
  const url = '/api/users/login-email/';

  try {
    const response = await client({
      url: url,
      method: 'POST',
      data: request,
    });

    return { error: '', response };
  } catch (error) {
    const axiosError = error as AxiosError;
    return { error: axiosError.message };
  }
}

export async function postSignup(request: SignupRequest): Promise<Response> {
  const url = '/api/architect-request/create-architect-request/';
  return client({
    url: url,
    method: 'POST',
    data: request,
  })
    .then((response) => {
      return response.data;
    })
    .catch((response) => response.data);
}

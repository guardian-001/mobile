import { client } from '@/api';
import type { LoginRequest, LoginResponse, SignupRequest } from '@/api/auth';
import { useAuth } from '@/core';

export async function postLogin(request: LoginRequest): Promise<LoginResponse> {
  const url = '/api/users/login-email/';
  return client({
    url: url,
    method: 'POST',
    data: request,
  })
    .then((response) => {
      const signIn = useAuth.use.signIn();

      signIn({
        token: {
          access: response.data.access,
          refresh: response.data.refresh,
        },
        user: response.data.user,
      });

      return { state: true };
    })
    .catch((error) => {
      return { state: false, error: error.message };
    });
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

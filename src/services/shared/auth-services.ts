import { client } from '@/api';
import type { LoginRequest, LoginResponse } from '@/api/auth';
import { useAuth } from '@/core';

export async function postLogin(request: LoginRequest): Promise<LoginResponse> {
  console.log('first');
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

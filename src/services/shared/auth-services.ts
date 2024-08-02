import { client } from '@/api';
import type {
  LoginEmailRequest,
  LoginRequest,
  LoginResponse,
  SignupRequest,
} from '@/api/auth';
export async function postLogin(request: LoginRequest): Promise<LoginResponse> {
  const url = '/api/users/login-email/';
  return client.post(url, request);
}

export async function postSignup(request: SignupRequest): Promise<Response> {
  const url = '/api/architect-request/create-architect-request/';
  return client
    .post(url, request)
    .then((response) => {
      return response.data;
    })
    .catch((response) => response.data);
}

export async function postEmailCheck(
  request: LoginEmailRequest
): Promise<LoginResponse> {
  const url = 'api/users/supplier/login/';
  return client.post(url, request);
}

import type { AxiosResponse } from 'axios';

import { client } from '@/api';
import type {
  LoginEmailRequest,
  LoginRequest,
  SignupRequest,
} from '@/api/auth';
export async function postLogin(request: LoginRequest): Promise<AxiosResponse> {
  const url = '/api/users/login-email/';
  return client.post(url, request);
}

export async function postSignup(request: SignupRequest): Promise<Response> {
  const url = '/api/architect-request/create-architect-request/';
  return client.post(url, request);
}

export async function postEmailCheck(
  request: LoginEmailRequest
): Promise<AxiosResponse> {
  const url = 'api/users/supplier/login/';
  return client.post(url, request);
}

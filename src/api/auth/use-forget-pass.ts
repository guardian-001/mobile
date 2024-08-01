import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';

import {
  forgetPass,
  resetPassOTP,
} from '@/services/shared/reset-password-service';

import type { ForgetPassRequest } from './types';
type Response = ForgetPassRequest;
type ResponseOTPass = void;
type RequestOTP = {
  email: string;
};
type Request = void;
export const useResetPassOTPApi = createMutation<
  ResponseOTPass,
  RequestOTP,
  AxiosError
>({
  mutationFn: resetPassOTP,
});
export const useForgetPassApi = createMutation<Response, Request, AxiosError>({
  mutationFn: forgetPass,
});

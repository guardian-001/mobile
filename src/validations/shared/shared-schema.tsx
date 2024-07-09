import { z } from 'zod';

import {
  emailValidation,
  passwordValidation,
  requiredValidation,
} from './shared-validations';

export const ConfirmPasswordSchema = z
  .object({
    password: passwordValidation,
    confirmPassword: passwordValidation,
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: 'validations.confirm-password',
      path: ['confirmPassword'],
    }
  );

export const EmailSchema = z.object({
  email: emailValidation,
});

export const PasswordSchema = z.object({
  password: passwordValidation,
});

export const LoginFormSchema = z.object({
  email: emailValidation,
  password: requiredValidation,
});

export const SignupFormSchema = z.object({
  email: emailValidation,
  password: passwordValidation,
});

export const OTPSchema = z.object({
  OTP: requiredValidation,
});

import { z } from 'zod';

import { passwordValidation } from '@/shared/validations';

export const ChangePasswordFormSchema = z
  .object({
    oldPassword: passwordValidation,
    newPassword: passwordValidation,
    confirmNewPassword: passwordValidation,
  })
  .refine(
    (values) => {
      return values.newPassword === values.confirmNewPassword;
    },
    {
      message: 'confirmPassword',
      path: ['confirmNewPassword'],
    }
  );

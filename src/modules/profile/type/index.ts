import type { z } from 'zod';

import type { ChangePasswordFormSchema } from '../schemas';

export type ResetPassFormProfileType = z.infer<typeof ChangePasswordFormSchema>;
export type PasswordFormType = Pick<
  ResetPassFormProfileType,
  'oldPassword' | 'newPassword' | 'confirmNewPassword'
>;

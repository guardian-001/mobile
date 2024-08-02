import type { ResetPassFormType } from '@/types';

export type PasswordFormType = Pick<
  ResetPassFormType,
  'password' | 'confirmPassword'
>;
export type EmailFormType = Pick<ResetPassFormType, 'email'>;

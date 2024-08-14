import type { z } from 'zod';

import type { ChangePasswordFormSchema } from '../schemas';

export type ResetPassFormProfileType = z.infer<typeof ChangePasswordFormSchema>;
export type BasicInfoFormType = {
  phoneNumber?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
};

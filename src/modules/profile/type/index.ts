import type { z } from 'zod';

import type {
  BasicInformationSchema,
  ChangePasswordFormSchema,
} from '../schemas';

export type ResetPassFormProfileType = z.infer<typeof ChangePasswordFormSchema>;
export type BasicInfoFormType = z.infer<typeof BasicInformationSchema>;

import type { z } from 'zod';

import type {
  BasicInformationSchema,
  ChangePasswordFormSchema,
} from '../schemas';
import type {
  supplierProfileInfoSchema,
  supplierSocialMediaSchema,
} from '../schemas/profile-info-schema';

export type ResetPassFormProfileType = z.infer<typeof ChangePasswordFormSchema>;
export type BasicInfoFormType = z.infer<typeof BasicInformationSchema>;
export type supplierProfileInfoType = z.infer<typeof supplierProfileInfoSchema>;
export type supplierSocialMediaType = z.infer<typeof supplierSocialMediaSchema>;

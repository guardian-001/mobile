import type { z } from 'zod';

import type {
  BioSchema,
  ChangePasswordFormSchema,
  CompanyInformationSchema,
  EmailSchema,
  PhoneNumberSchema,
} from '../schemas';
import type {
  supplierProfileInfoSchema,
  supplierSocialMediaSchema,
} from '../schemas/profile-info-schema';

export type ResetPassFormProfileType = z.infer<typeof ChangePasswordFormSchema>;
export type supplierProfileInfoType = z.infer<typeof supplierProfileInfoSchema>;
export type supplierSocialMediaType = z.infer<typeof supplierSocialMediaSchema>;
export type EmailFormType = z.infer<typeof EmailSchema>;
export type PhoneFormType = z.infer<typeof PhoneNumberSchema>;
export type BioFormType = z.infer<typeof BioSchema>;
export type CompanyInformationFormType = z.infer<
  typeof CompanyInformationSchema
>;

import type { z } from 'zod';

import type {
  BioSchema,
  ChangePasswordFormSchema,
  CompanyInformationSchema,
  EmailSchema,
  PhoneNumberSchema,
} from '../schemas';

export type ResetPassFormProfileType = z.infer<typeof ChangePasswordFormSchema>;
export type EmailFormType = z.infer<typeof EmailSchema>;
export type PhoneFormType = z.infer<typeof PhoneNumberSchema>;
export type BioFormType = z.infer<typeof BioSchema>;
export type CompanyInformationFormType = z.infer<
  typeof CompanyInformationSchema
>;

import type { z } from 'zod';

import type { EmailSchema, ResetPassFormSchema } from '@/shared/validations';

export type LoginFormSupplierType = z.infer<typeof EmailSchema>;
export type ResetPassFormType = z.infer<typeof ResetPassFormSchema>;
export type Category = {
  id: number;
  label: string;
  icon: string;
};

export type Style = {
  id: number;
  label: string;
  icon: string;
};
export type Need = {
  id: number;
  label: string;
  icon: string;
};
export type Image = {
  name: string;
  url: string;
};
export type TagType = {
  value: string;
  displayName: string;
};
export type ImageInfo = {
  name: string | null | undefined;
  uri: string;
  type?: string | undefined;
};
export type SendCodeRequest = {
  phoneNumber: string;
};
export type VerificationCodeRequest = {
  phoneNumber: string | undefined;
  verificationCode: string;
};
export type EmailPhoneType = {
  email: string;
  phoneNumber: string;
};
export type verificationCodeType = {
  verificationCode: string;
};

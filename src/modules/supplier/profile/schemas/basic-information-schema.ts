import { z } from 'zod';

import {
  emailValidation,
  phoneValidation,
  requiredValidation,
} from '@/shared/validations';

export const EmailSchema = z.object({
  email: emailValidation,
});
export const PhoneNumberSchema = z.object({
  phoneNumber: phoneValidation,
});
export const BioSchema = z.object({
  bio: requiredValidation,
});

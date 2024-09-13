import { z } from 'zod';

import {
  emailValidation,
  phoneValidation,
  requiredLongTextValidation,
} from '@/shared/validations';

export const EmailSchema = z.object({
  email: emailValidation,
});
export const PhoneNumberSchema = z.object({
  phoneNumber: phoneValidation,
});
export const BioSchema = z.object({
  bio: requiredLongTextValidation,
});

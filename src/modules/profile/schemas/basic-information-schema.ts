import { z } from 'zod';

import {
  emailValidation,
  fieldValidation,
  phoneValidation,
} from '@/shared/validations';

export const BasicInformationSchema = z.object({
  firstName: fieldValidation,
  lastName: fieldValidation,
  email: emailValidation,
  phoneNumber: phoneValidation,
});

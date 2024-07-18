import { z } from 'zod';

import {
  emailValidation,
  fieldValidation,
  notRequiredValidationBoolean,
  phoneValidation,
  requiredValidationBoolean,
} from '@/validations';

export const CreateAnnouncementStepTwelveSchema = z.object({
  firstName: fieldValidation,
  lastName: fieldValidation,
  email: emailValidation,
  phoneNumber: phoneValidation,
  rules: requiredValidationBoolean,
  receiveNotifications: notRequiredValidationBoolean,
});

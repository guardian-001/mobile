import { z } from 'zod';

import { notRequiredValidationBoolean } from '@/shared/validations';

export const notificationFormSchema = z.object({
  news: notRequiredValidationBoolean,
  activity: notRequiredValidationBoolean,
});

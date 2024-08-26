import { z } from 'zod';

import { requiredValidation } from '@/shared/validations';
export const specialityTypeSchema = z.object({
  specialityType: requiredValidation,
});

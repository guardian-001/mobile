import { z } from 'zod';

import { fieldValidation } from '@/shared/validations';
export const cityTypeSchema = z.object({
  city: fieldValidation,
});

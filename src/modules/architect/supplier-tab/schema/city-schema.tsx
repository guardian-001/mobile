import { z } from 'zod';

import { fieldValidation } from '@/shared/validations';
export const citySchema = z.object({
  city: fieldValidation,
});

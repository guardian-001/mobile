import { z } from 'zod';

import { requiredValidation } from '@/shared/validations';

export const FilterSchema = z.object({
  status: requiredValidation,
});

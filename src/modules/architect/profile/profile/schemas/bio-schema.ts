import { z } from 'zod';

import { requiredValidation } from '@/shared/validations';

export const BioSchema = z.object({
  bio: requiredValidation,
});

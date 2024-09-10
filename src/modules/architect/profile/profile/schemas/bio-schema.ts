import { z } from 'zod';

import { requiredLongTextValidation } from '@/shared/validations';

export const BioSchema = z.object({
  bio: requiredLongTextValidation,
});

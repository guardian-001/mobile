import { z } from 'zod';

import { idStringValidation } from '@/shared/validations';

export const categorySchema = z.object({
  category: idStringValidation,
});

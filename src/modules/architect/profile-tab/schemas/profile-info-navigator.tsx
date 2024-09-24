import { z } from 'zod';

import { fieldValidation } from '@/shared/validations';

export const navigatorSchema = z.object({
  tag: fieldValidation,
});

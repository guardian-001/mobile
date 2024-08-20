import { z } from 'zod';

import { requiredValidationNumber } from '@/shared/validations';

export const ProjectCategorySchema = z.object({
  projectCategory: requiredValidationNumber,
});

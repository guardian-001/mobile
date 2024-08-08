import { z } from 'zod';

import { requiredValidation } from '@/shared/validations';

export const ProjectCategorySchema = z.object({
  projectCategory: requiredValidation,
});

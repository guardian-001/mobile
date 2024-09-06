import { z } from 'zod';

import { arrayOfNonEmptyNumbers } from '@/shared/validations';

export const ProjectCategorySchema = z.object({
  projectCategory: arrayOfNonEmptyNumbers,
});

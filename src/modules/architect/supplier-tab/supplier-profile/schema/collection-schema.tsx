import { z } from 'zod';

import { fieldValidation, idValidation } from '@/shared/validations';

export const collectionIdSchema = z.object({
  collection: idValidation,
});

export const collectionSchema = z.object({
  title: fieldValidation,
  categoryLabel: fieldValidation,
  appearance: fieldValidation,
  visibility: z.boolean(),
});

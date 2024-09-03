import { z } from 'zod';

import { productImageCreationSchema } from '../../catalogue/schema/collection-schema';

export const productImageValidation = z
  .array(productImageCreationSchema)
  .min(1, 'validations.required');

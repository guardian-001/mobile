import { z } from 'zod';

import { arrayOfNonEmptyNumbers } from '@/shared/validations';

export const PropertyTypeSchema = z.object({
  propertyType: arrayOfNonEmptyNumbers,
});

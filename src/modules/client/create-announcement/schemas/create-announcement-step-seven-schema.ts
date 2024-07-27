import { z } from 'zod';

import {
  fieldValidation,
  notRequiredValidation,
  requiredValidation,
} from '@/shared/validations';

export const CreateAnnouncementStepSevenSchema = z.object({
  address: fieldValidation,
  city: requiredValidation,
  terrainSurface: notRequiredValidation,
  workSurface: requiredValidation,
  numberFloors: z.number().optional(),
});

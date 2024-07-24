import { z } from 'zod';

import { fieldValidation, requiredValidation } from '@/shared/validations';

export const CreateAnnouncementStepSevenSchema = z.object({
  address: fieldValidation,
  city: requiredValidation,
  terrainSurface: requiredValidation,
  workSurface: requiredValidation,
});

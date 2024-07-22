import { z } from 'zod';

import { requiredValidation } from '@/shared/validations';

export const CreateAnnouncementStepSevenSchema = z.object({
  address: requiredValidation,
  city: requiredValidation,
  terrainSurface: z.string().optional(),
  workSurface: requiredValidation,
});

import { z } from 'zod';

import { requiredValidation } from '@/validations';

export const CreateAnnouncementStepEightSchema = z.object({
  budget: requiredValidation,
  description: requiredValidation,
});

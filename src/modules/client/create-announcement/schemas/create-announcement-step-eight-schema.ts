import { z } from 'zod';

import { requiredValidation } from '@/shared/validations';

export const CreateAnnouncementStepEightSchema = z.object({
  budget: requiredValidation,
  description: requiredValidation,
});

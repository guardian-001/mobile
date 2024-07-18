import { z } from 'zod';

import { requiredValidation } from '@/validations';

export const CreateAnnouncementStepFiveSchema = z.object({
  workType: requiredValidation,
});

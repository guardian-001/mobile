import { z } from 'zod';

import { requiredValidationNumber } from '@/validations';

export const CreateAnnouncementStepFiveSchema = z.object({
  workType: requiredValidationNumber,
});

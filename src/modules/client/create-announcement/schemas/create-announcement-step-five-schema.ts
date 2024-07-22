import { z } from 'zod';

import { requiredValidationNumber } from '@/shared/validations';

export const CreateAnnouncementStepFiveSchema = z.object({
  workType: requiredValidationNumber,
});

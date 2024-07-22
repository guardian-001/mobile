import { z } from 'zod';

import { requiredValidationNumber } from '@/validations';

export const CreateAnnouncementStepThreeSchema = z.object({
  projectCategory: requiredValidationNumber,
});

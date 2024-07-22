import { z } from 'zod';

import { requiredValidationNumber } from '@/shared/validations';

export const CreateAnnouncementStepThreeSchema = z.object({
  projectCategory: requiredValidationNumber,
});

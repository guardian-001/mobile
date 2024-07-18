import { z } from 'zod';

import { requiredValidation } from '@/validations';

export const CreateAnnouncementStepThreeSchema = z.object({
  projectCategory: requiredValidation,
});

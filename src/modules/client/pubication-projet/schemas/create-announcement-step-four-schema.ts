import { z } from 'zod';

import { requiredValidation } from '@/validations';

export const CreateAnnouncementStepFourSchema = z.object({
  propertyType: requiredValidation,
});

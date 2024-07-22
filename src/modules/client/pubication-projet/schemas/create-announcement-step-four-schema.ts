import { z } from 'zod';

import { requiredValidationNumber } from '@/validations';

export const CreateAnnouncementStepFourSchema = z.object({
  propertyType: requiredValidationNumber,
});

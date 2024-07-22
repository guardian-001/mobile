import { z } from 'zod';

import { requiredValidationNumber } from '@/shared/validations';

export const CreateAnnouncementStepFourSchema = z.object({
  propertyType: requiredValidationNumber,
});

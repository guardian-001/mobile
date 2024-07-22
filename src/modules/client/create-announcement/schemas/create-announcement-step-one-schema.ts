import { z } from 'zod';

import { requiredValidationNumber } from '@/shared/validations';

export const CreateAnnouncementStepOneSchema = z.object({
  architectSpeciality: requiredValidationNumber,
});

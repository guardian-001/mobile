import { z } from 'zod';

import { requiredValidationNumber } from '@/validations';

export const CreateAnnouncementStepOneSchema = z.object({
  architectSpeciality: requiredValidationNumber,
});

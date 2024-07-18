import { z } from 'zod';

import { requiredValidation } from '@/validations';

export const CreateAnnouncementStepOneSchema = z.object({
  architectSpeciality: requiredValidation,
});

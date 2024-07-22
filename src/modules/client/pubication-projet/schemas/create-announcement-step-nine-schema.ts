import { z } from 'zod';

import { requiredValidationNumber } from '@/validations';

export const CreateAnnouncementStepNineSchema = z.object({
  architecturalStyle: requiredValidationNumber,
});

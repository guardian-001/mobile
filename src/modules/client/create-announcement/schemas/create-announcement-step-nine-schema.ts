import { z } from 'zod';

import { requiredValidationNumber } from '@/shared/validations';

export const CreateAnnouncementStepNineSchema = z.object({
  architecturalStyle: requiredValidationNumber,
});

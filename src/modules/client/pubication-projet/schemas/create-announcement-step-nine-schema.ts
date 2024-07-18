import { z } from 'zod';

import { requiredValidation } from '@/validations';

export const CreateAnnouncementStepNineSchema = z.object({
  architecturalStyle: requiredValidation,
});

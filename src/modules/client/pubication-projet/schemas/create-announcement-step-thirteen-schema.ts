import { z } from 'zod';

import { requiredValidation } from '@/validations';

export const CreateAnnouncementStepThirteenSchema = z.object({
  verificationCode: requiredValidation,
});

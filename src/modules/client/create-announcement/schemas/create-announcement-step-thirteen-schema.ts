import { z } from 'zod';

import { requiredValidation } from '@/shared/validations';

export const CreateAnnouncementStepThirteenSchema = z.object({
  verificationCode: requiredValidation,
});

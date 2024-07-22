import { z } from 'zod';

import { arrayOfNonEmptyNumbers } from '@/shared/validations';

export const CreateAnnouncementStepTwoSchema = z.object({
  needs: arrayOfNonEmptyNumbers,
});

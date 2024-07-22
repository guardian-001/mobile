import { z } from 'zod';

import { arrayOfNonEmptyNumbers } from '@/validations';

export const CreateAnnouncementStepTwoSchema = z.object({
  needs: arrayOfNonEmptyNumbers,
});

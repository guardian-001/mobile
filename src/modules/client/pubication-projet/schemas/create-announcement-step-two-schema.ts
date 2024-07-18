import { z } from 'zod';

import { arrayOfNonEmptyStrings } from '@/validations';

export const CreateAnnouncementStepTwoSchema = z.object({
  needs: arrayOfNonEmptyStrings,
});

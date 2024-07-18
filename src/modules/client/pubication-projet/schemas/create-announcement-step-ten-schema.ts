import { z } from 'zod';

import { arrayOfNonEmptyStrings } from '@/validations';

export const CreateAnnouncementStepTenSchema = z.object({
  projectExtensions: arrayOfNonEmptyStrings,
});

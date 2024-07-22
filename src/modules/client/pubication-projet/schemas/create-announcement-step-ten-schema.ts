import { z } from 'zod';

import { arrayOfNonEmptyNumbers } from '@/validations';

export const CreateAnnouncementStepTenSchema = z.object({
  projectExtensions: arrayOfNonEmptyNumbers,
});

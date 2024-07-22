import { z } from 'zod';

import { arrayOfNonEmptyNumbers } from '@/shared/validations';

export const CreateAnnouncementStepTenSchema = z.object({
  projectExtensions: arrayOfNonEmptyNumbers,
});

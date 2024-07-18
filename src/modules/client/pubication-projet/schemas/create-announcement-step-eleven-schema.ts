import { z } from 'zod';

import { arrayOfNonEmptyImage } from '@/validations';

export const CreateAnnouncementStepElevenSchema = z.object({
  projectImages: arrayOfNonEmptyImage,
});

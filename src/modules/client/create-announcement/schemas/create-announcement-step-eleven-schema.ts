import { z } from 'zod';

import { arrayOfNonEmptyImage } from '@/shared/validations';

export const CreateAnnouncementStepElevenSchema = z.object({
  projectImages: arrayOfNonEmptyImage,
});

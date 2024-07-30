import { z } from 'zod';

import { imagesValidation } from '@/shared/validations';

export const CreateAnnouncementStepElevenSchema = z.object({
  projectImages: imagesValidation,
});

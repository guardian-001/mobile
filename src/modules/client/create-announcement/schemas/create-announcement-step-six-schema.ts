import { z } from 'zod';

export const CreateAnnouncementStepSixSchema = z.object({
  piecesRenovate: z.record(z.number()).optional(),
});

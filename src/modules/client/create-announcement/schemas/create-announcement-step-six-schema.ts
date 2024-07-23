import { z } from 'zod';

export const CreateAnnouncementStepSixSchema = z.object({
  piecesRenovate: z.array(z.record(z.number())).optional(),
});

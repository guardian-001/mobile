import type { z } from 'zod';

import type { BioSchema } from '../schemas/bio-schema';

export type BioFormType = z.infer<typeof BioSchema>;

import type { z } from 'zod';

import type {
  appearanceSchema,
  DetailsSchema,
  FirstConnectionSchema,
  specialityTypeSchema,
} from '../schemas/create-account-schemas';

export type DetailsType = z.infer<typeof DetailsSchema>;
export type SpecialityType = z.infer<typeof specialityTypeSchema>;
export type AppearanceType = z.infer<typeof appearanceSchema>;
export type FirstConnectionType = z.infer<typeof FirstConnectionSchema>;

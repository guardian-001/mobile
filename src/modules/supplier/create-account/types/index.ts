import type { z } from 'zod';

import type {
  CreateAccountSchema,
  FirstConnectionSchema,
  IntrestSchema,
} from '../schemas/create-account-schemas';

export type CreateAccountType = z.infer<typeof CreateAccountSchema>;
export type IntrestType = z.infer<typeof IntrestSchema>;
export type FirstConnectionType = z.infer<typeof FirstConnectionSchema>;

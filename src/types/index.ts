import type { z } from 'zod';

import type { SignupFormSchema } from '@/validations';

export type SignupFormDataType = z.infer<typeof SignupFormSchema>;

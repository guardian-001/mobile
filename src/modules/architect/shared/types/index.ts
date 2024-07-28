import type { z } from 'zod';

import type { ProjectRealizationSchema } from '../schemas/project-realization-schema';
import type { SignupFormSchema } from '../schemas/signup-request-schema';

export type SignupFormDataType = z.infer<typeof SignupFormSchema>;
export type ProjectRealizationType = z.infer<typeof ProjectRealizationSchema>;

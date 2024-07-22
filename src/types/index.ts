import type { z } from 'zod';

import type { EmailSchema, ResetPassFormSchema } from '@/validations';

export type LoginFormSupplierType = z.infer<typeof EmailSchema>;
export type ResetPassFormType = z.infer<typeof ResetPassFormSchema>;

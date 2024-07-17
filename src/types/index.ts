// type.ts
import type { SubmitHandler } from 'react-hook-form';
import type * as z from 'zod';

import type { EmailSchema } from '@/validations';

export type LoginFormType = z.infer<typeof EmailSchema>;
export type LoginFormProps = {
  onSubmit: SubmitHandler<LoginFormType>;
};

import type { SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

import type { EmailSchema } from '@/validations';
import type { SignupFormSchema } from '@/validations';

export type SignupFormDataType = z.infer<typeof SignupFormSchema>;

export type LoginFormType = z.infer<typeof EmailSchema>;
export type LoginFormProps = {
  onSubmit: SubmitHandler<LoginFormType>;
};

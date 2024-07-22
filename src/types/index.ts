import type { SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

import type { EmailSchema } from '@/shared/validations';
import type { SignupFormSchema } from '@/shared/validations';

export type SignupFormDataType = z.infer<typeof SignupFormSchema>;

export type LoginFormType = z.infer<typeof EmailSchema>;
export type LoginFormProps = {
  onSubmit: SubmitHandler<LoginFormType>;
};

export type StepperFormProps = {
  onHandleBack: () => void;
  onHandleNext: () => void;
  setFormData: (data: any) => void;
  formData: any;
};

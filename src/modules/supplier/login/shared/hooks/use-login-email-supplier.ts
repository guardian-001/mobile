import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';
import { EmailSchema } from '@/shared/validations';
import type { EmailType, LoginFormType } from '@/types';

export const useLoginEmailSupplier = () => {
  const verifEmail = true;
  const { formData, setFormData } = useFormStepper<LoginFormType>();
  const { handleSubmit, control } = useCustomForm(EmailSchema, {
    email: formData.email,
  });

  const onSubmit = (data: EmailType) => {
    setFormData((prev: LoginFormType) => ({
      ...prev,
      ...data,
    }));
    // api call
  };

  return {
    verifEmail,
    onSubmit,
    handleSubmit,
    control,
  };
};

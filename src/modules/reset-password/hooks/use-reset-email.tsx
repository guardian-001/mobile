import { useResetPassOTPApi } from '@/api/auth';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';
import { EmailSchema } from '@/shared/validations';
import type { ResetPassFormType } from '@/types';

import type { EmailFormType } from '../type';

export const useResetEmail = () => {
  const { formData, setFormData, onHandleNext } =
    useFormStepper<ResetPassFormType>();
  const { handleSubmit, control, form } = useCustomForm(EmailSchema, {
    email: formData.email,
  });
  const sendOTP = useResetPassOTPApi();

  const onSubmit = (data: EmailFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));

    sendOTP.mutate(data, {
      onSuccess: () => {
        onHandleNext();
      },
      onError: (error) => {
        throw error;
      },
    });
  };

  return {
    formData,
    setFormData,
    onHandleNext,
    onSubmit,
    handleSubmit,
    control,
    form,
  };
};

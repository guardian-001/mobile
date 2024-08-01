import { getPasswordRequirements, useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';
import { ResetPassFormSchema } from '@/shared/validations';
import type { ResetPassFormType } from '@/types';

import type { PasswordFormType } from '../type';

export const useResetPassword = () => {
  const { formData, setFormData, onHandleNext } =
    useFormStepper<ResetPassFormType>();

  const { handleSubmit, control, form } = useCustomForm(ResetPassFormSchema, {
    password: formData.password,
    confirmPassword: formData.confirmPassword,
  });

  const onSubmit = (data: PasswordFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };

  const { requirements: passwordRequirements, allValid: allRequirementsValid } =
    getPasswordRequirements(
      form.watch('password'),
      form.watch('confirmPassword')
    );

  return {
    allRequirementsValid,
    passwordRequirements,
    onSubmit,
    handleSubmit,
    control,
    form,
  };
};

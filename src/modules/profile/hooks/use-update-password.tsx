import { useRouter } from 'expo-router';

import { useUpdatePasswordApi } from '@/api/profileSettings';
import { getPasswordRequirements, useCustomForm } from '@/core';
import { showSuccesMessage } from '@/shared/components';

import { ChangePasswordFormSchema } from '../schemas';
import type { ResetPassFormProfileType } from '../type';

export const useUpdatePassword = () => {
  const router = useRouter();
  const { handleSubmit, control, form, reset } = useCustomForm(
    ChangePasswordFormSchema,
    {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    }
  );
  const updatePassword = useUpdatePasswordApi();

  const onSubmit = (data: ResetPassFormProfileType) => {
    updatePassword.mutate(data, {
      onSuccess: (response) => {
        showSuccesMessage(response.data.message);
        reset({ oldPassword: '', newPassword: '', confirmNewPassword: '' });
        router.back();
      },
    });
  };

  const { requirements: passwordRequirements, allValid: allRequirementsValid } =
    getPasswordRequirements(
      form.watch('newPassword'),
      form.watch('confirmNewPassword')
    );

  return {
    allRequirementsValid,
    passwordRequirements,
    onSubmit,
    handleSubmit,
    control,
    form,
    reset,
  };
};

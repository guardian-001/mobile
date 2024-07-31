import { useRouter } from 'expo-router';

import { useUpdatePasswordApi } from '@/api/profileSettings';
import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
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
    console.log(data);
    updatePassword.mutate(data, {
      onSuccess: () => {
        showSuccesMessage();
        reset({ oldPassword: '', newPassword: '', confirmNewPassword: '' });
        router.back();
      },
      onError: (error: any) => {
        console.log('error', error);
      },
    });
  };

  const passwordRequirements: { isValid: boolean; message: TxKeyPath }[] = [
    {
      isValid: form.watch('newPassword')?.length >= 8,
      message: 'resetpass.passwordMinLength',
    },
    {
      isValid:
        /[a-z]/.test(form.watch('newPassword')) &&
        form.watch('newPassword')?.length >= 1,
      message: 'resetpass.passwordLowercase',
    },
    {
      isValid: /[A-Z]/.test(form.watch('newPassword')),
      message: 'resetpass.passwordUppercase',
    },
    {
      isValid: /[0-9]/.test(form.watch('newPassword')),
      message: 'resetpass.passwordDigit',
    },
    {
      isValid: /[^a-zA-Z0-9]/.test(form.watch('newPassword')),
      message: 'resetpass.passwordSpecialChar',
    },
    {
      isValid:
        form.watch('confirmNewPassword') === form.watch('newPassword') &&
        form.watch('confirmNewPassword') !== '' &&
        form.watch('newPassword') !== '',
      message: 'resetpass.passwordConfirmation',
    },
  ];

  const allRequirementsValid = passwordRequirements.every(
    (requirement) => requirement.isValid
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

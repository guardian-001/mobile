import { useRouter } from 'expo-router';
import { useState } from 'react';

import { useEmailCheckApi } from '@/api/auth/supplier/use-login-email';
import { useCustomForm, useRouteName } from '@/core';
import type { LoginSupplierFormType } from '@/modules/supplier/shared/types';
import { useFormStepper } from '@/shared';
import { EmailSchema } from '@/shared/validations';
import { error } from '@/theme/colors';
import type { EmailType } from '@/types';

export const useLoginEmailSupplier = () => {
  const { formData, setFormData } = useFormStepper<LoginSupplierFormType>();
  const { handleSubmit, control } = useCustomForm(EmailSchema, {
    email: formData.email,
  });

  // const [error, setError] = useState<string>('');

  const router = useRouter();
  const space = useRouteName();

  const emailCheck = useEmailCheckApi();

  const updateData = async (data: EmailType) => {
    setFormData((prev: LoginSupplierFormType) => ({
      ...prev,
      ...data,
    }));
  };
  const onSubmit = async (data: EmailType) => {
    await updateData(data);
    console.log(formData);
    console.log(data);
    console.log({ email: formData.email });
    emailCheck.mutate(data, {
      onError: (error) => {
        console.log(error);
        router.push(`(${space})/(public)/check-mail-banner`);
      },
      onSuccess: () => {
        setFormData((prev: LoginSupplierFormType) => ({
          ...prev,
          state: 'pass',
        }));
      },
    });
  };

  const [checked, setChecked] = useState(true);

  const handleResetPass = () => {
    router.push(`/(${space})/(public)/reset-password`);
  };

  return {
    onSubmit,
    handleSubmit,
    control,
    handleResetPass,
    checked,
    setChecked,
    error,
  };
};

import React from 'react';

import { useResetPassOTPApi } from '@/api/auth';
import { translate } from '@/core';
import { Button, ControlledInput, View } from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';
import { useFormStepper } from '@/shared/providers/use-form-stepper-provider';
import type { ResetPassFormType } from '@/types';
import { EmailSchema } from '@/validations';

export default function ResetFormEmail() {
  type EmailFormType = Pick<ResetPassFormType, 'email'>;
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
      onError: () => {},
    });
  };
  return (
    <View className="flex-1">
      <ControlledInput
        control={control}
        name="email"
        label={translate('common.email')}
        placeholder={translate('common.yourEmail')}
        className="my-8"
      />

      <Button
        label={translate('resetpass.reset')}
        onPress={handleSubmit(onSubmit)}
        className="h-12 rounded-md"
        disabled={!form.formState.isValid}
      />
    </View>
  );
}

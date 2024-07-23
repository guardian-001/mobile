import React from 'react';

import { Button, Text, TouchableOpacity, View } from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';
import { useFormStepper } from '@/shared/providers';
import { translate } from '@/translations/i18n';
import type { ResetPassFormType } from '@/types';
import { OTPSchema } from '@/validations';

import { OTPInput } from './otp-input';

export default function VerificationCode() {
  const { control, handleSubmit } = useCustomForm(OTPSchema);

  const { onHandleNext } = useFormStepper<ResetPassFormType>();

  const onSubmit = () => {
    onHandleNext();
  };
  return (
    <View className="w-full flex-1 items-center justify-center">
      <View className="my-8 w-11/12 flex-1 ">
        <OTPInput length={4} disabled={false} name="OTP" control={control} />
      </View>
      <TouchableOpacity onPress={() => {}} className="mb-4">
        <Text className="text-primary" tx="resetpass.resendCode" />
      </TouchableOpacity>
      <Button
        label={translate('resetpass.reset')}
        onPress={handleSubmit(onSubmit)}
        className="h-12 w-10/12 rounded-md"
      />
    </View>
  );
}

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button, Text, TouchableOpacity, View } from '@/shared/components';
import { translate } from '@/translations/i18n';

import { OTPInput } from './otp-input';

const schema = z.object({
  OTP: z.string(),
});

export type FormType = z.infer<typeof schema>;

export type ResetFormProps = {
  onSubmit?: SubmitHandler<FormType>;
};
export default function VerificationCode({
  onSubmit = () => {},
}: ResetFormProps) {
  const { control, handleSubmit } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
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

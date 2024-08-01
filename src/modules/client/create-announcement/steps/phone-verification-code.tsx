import React from 'react';

import { translate } from '@/core';
import { OTPInput } from '@/modules/reset-password/otp-input';
import { StepperButton } from '@/modules/shared';
import { Image, Text, View } from '@/shared/components';

import { usePhoneVerificationCode } from '../hooks/use-phone-verification-code';

export function PhoneVerificationCode() {
  const { control, handleSubmit, onSubmit, space, phone } =
    usePhoneVerificationCode();
  return (
    <View className="flex flex-1 items-center pt-12">
      <View className="flex flex-1 items-center">
        <Image
          className="mb-8 h-24 w-44 self-center overflow-hidden"
          contentFit="cover"
          source={
            space === 'client'
              ? require('@/assets/images/code-verification-blue.png')
              : require('@/assets/images/code-verification-red.png')
          }
        />
        <Text
          tx="resetpass.verificationCodeTitle"
          className="mb-2 text-xl font-bold"
        />
        <Text className="mb-10 text-base text-description">
          {translate('resetpass.verificationCodeDescription')} {phone}
        </Text>
        <OTPInput
          length={6}
          disabled={false}
          name="verificationCode"
          control={control}
        />
      </View>
      <StepperButton
        onPressHandler={handleSubmit(onSubmit)}
        label={translate('announcement.OtpButtonLabel')}
      />
    </View>
  );
}

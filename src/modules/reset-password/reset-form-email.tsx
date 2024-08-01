import React from 'react';

import { translate } from '@/core';
import { Button, ControlledInput, View } from '@/shared/components';

import { useResetEmail } from './hooks';

export default function ResetFormEmail() {
  const { onSubmit, handleSubmit, control, form } = useResetEmail();
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

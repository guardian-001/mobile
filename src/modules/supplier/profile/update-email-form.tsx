import React from 'react';
import { Platform } from 'react-native';

import { translate } from '@/core';
import {
  Button,
  ControlledInput,
  HeaderTitle,
  KeyboardAvoidingView,
  ScrollView,
  Text,
} from '@/shared/components';

import { useUpdateEmail } from './hooks/use-update-email';

export const UpdateEmailForm = () => {
  const { control, form, handleSubmit, onSubmit } = useUpdateEmail();

  return (
    <>
      <HeaderTitle text="profile.info" type="default" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 bg-white"
      >
        <ScrollView className="flex-1" contentContainerClassName="gap-4 p-6">
          <Text tx="labels.mail" className="mb-1 text-2xl font-extrabold" />
          <Text
            tx="supplierProfile.updateEmailDescription"
            className="mb-4 text-base text-description"
          />
          <ControlledInput
            testID="mail-input"
            control={control}
            name="email"
            label={translate('labels.mail')}
            placeholder={translate('labels.mailPlaceHolder')}
          />
        </ScrollView>
        <Button
          label={translate('notification.save')}
          onPress={handleSubmit(onSubmit)}
          className="mx-4 mb-10 h-12 rounded-lg"
          disabled={!form.formState.isValid}
        />
      </KeyboardAvoidingView>
    </>
  );
};

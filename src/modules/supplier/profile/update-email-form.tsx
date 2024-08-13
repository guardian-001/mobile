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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white pt-5 "
    >
      <HeaderTitle text="profile.info" type="default" />
      <ScrollView className="flex-1 p-6" contentContainerClassName="gap-4">
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
        <Button
          label="Enregistrer"
          onPress={handleSubmit(onSubmit)}
          className="my-8 h-12 rounded-lg"
          disabled={!form.formState.isValid}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

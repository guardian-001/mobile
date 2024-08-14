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

import { useUpdatephone } from './hooks/use-update-phone';

export const UpdatePhoneNumberForm = () => {
  const { control, form, handleSubmit, onSubmit } = useUpdatephone();

  return (
    <>
      <HeaderTitle text="profile.info" type="default" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 bg-white pt-5 "
      >
        <HeaderTitle text="profile.info" type="default" />
        <ScrollView className="flex-1 p-6" contentContainerClassName="gap-4">
          <Text tx="labels.phone" className="mb-1 text-2xl font-extrabold" />
          <Text
            tx="supplierProfile.updatePhoneDescription"
            className="mb-4 text-base text-description"
          />
          <ControlledInput
            testID="phoneNumber-input"
            control={control}
            name="phoneNumber"
            label={translate('labels.phone')}
            placeholder={translate('labels.phonePlaceHolder')}
          />
          <Button
            label="Enregistrer"
            onPress={handleSubmit(onSubmit)}
            className="my-8 h-12 rounded-lg"
            disabled={!form.formState.isValid}
          />
        </ScrollView>
      </KeyboardAvoidingView>{' '}
    </>
  );
};

import React from 'react';
import { ActivityIndicator, Platform } from 'react-native';

import { translate } from '@/core';
import {
  Button,
  ControlledInput,
  HeaderTitle,
  KeyboardAvoidingView,
  ScrollView,
} from '@/shared/components';

import { useUpdateProfile } from './hooks/use-update-profile';

export const BasicInfoForm = () => {
  const { control, form, handleSubmit, onSubmit, isSuccess, isLoading } =
    useUpdateProfile();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white  "
    >
      <HeaderTitle text="profile.info" type="default" />
      {isLoading && <ActivityIndicator />}
      {isSuccess && (
        <ScrollView
          className="flex-1 p-6 pt-12"
          contentContainerClassName="gap-4"
        >
          <ControlledInput
            testID="firstName-input"
            control={control}
            name="firstName"
            label={translate('labels.name')}
            placeholder={translate('labels.name')}
          />
          <ControlledInput
            testID="LastName-input"
            control={control}
            name="lastName"
            label={translate('labels.surname')}
            placeholder={translate('labels.surname')}
          />
          <ControlledInput
            testID="email-input"
            control={control}
            name="email"
            label={translate('labels.mail')}
            placeholder={translate('labels.mail')}
          />
          <ControlledInput
            name="phoneNumber"
            control={control}
            label={translate('labels.phone')}
            placeholder={translate('labels.phone')}
          />
          <Button
            label="Enregistrer"
            onPress={handleSubmit(onSubmit)}
            className="my-8 h-12 rounded-lg"
            disabled={!form.formState.isValid}
          />
        </ScrollView>
      )}
    </KeyboardAvoidingView>
  );
};

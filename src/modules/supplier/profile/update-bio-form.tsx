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

import { useUpdateBio } from './hooks/use-update-bio';

export const UpdateBioForm = () => {
  const { control, form, handleSubmit, onSubmit } = useUpdateBio();
  return (
    <>
      <HeaderTitle text="profile.info" type="default" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 bg-white"
      >
        <ScrollView className="flex-1" contentContainerClassName="gap-4 p-6">
          <Text
            tx="supplierProfile.updateBioTitle"
            className="mb-1 text-2xl font-extrabold"
          />
          <Text
            tx="supplierProfile.updateBioDescription"
            className="mb-4 text-base text-description"
          />
          <ControlledInput
            testID="bio-input"
            control={control}
            name="bio"
            inputAreaType="textArea"
            label={translate('supplierProfile.bio')}
            placeholder={translate('supplierProfile.bioPlaceHolder')}
            className="flex-1"
          />
        </ScrollView>
        <Button
          label="Enregistrer"
          onPress={handleSubmit(onSubmit)}
          className="mx-4 mb-10 h-12 rounded-lg"
          disabled={!form.formState.isValid}
        />
      </KeyboardAvoidingView>
    </>
  );
};

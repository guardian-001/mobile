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
  console.log(form.formState.errors);
  return (
    <>
      <HeaderTitle text="profile.info" type="default" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 bg-white pt-5 "
      >
        <ScrollView className="flex-1 p-6" contentContainerClassName="gap-4">
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
          <Button
            label="Enregistrer"
            onPress={handleSubmit(onSubmit)}
            className="my-8 h-12 rounded-lg"
            disabled={!form.formState.isValid}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

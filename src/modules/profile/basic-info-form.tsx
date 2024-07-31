import { useRouter } from 'expo-router';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { Platform } from 'react-native';
import type * as z from 'zod';

import { translate } from '@/core';
import {
  Button,
  ControlledInput,
  HeaderTitle,
  KeyboardAvoidingView,
  ScrollView,
} from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';

import { BasicInformationSchema } from './schemas';

type BasicInfoFormType = z.infer<typeof BasicInformationSchema>;
type BasicInfoFormProps = {};

export const BasicInfoForm = ({}: BasicInfoFormProps) => {
  const { handleSubmit, control, form } = useCustomForm(BasicInformationSchema);
  const router = useRouter();

  const handleFormSubmit: SubmitHandler<BasicInfoFormType> = () => {
    router.back();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white dark:bg-black"
    >
      <HeaderTitle text="profile.info" type="default" />
      <ScrollView
        className="flex-1 p-6 pt-12"
        contentContainerClassName="gap-4"
      >
        <ControlledInput
          testID="firstName-input"
          control={control}
          name="firstName"
          label={'firstName'}
          placeholder={'firstName'}
        />
        <ControlledInput
          testID="LastName-input"
          control={control}
          name="lastName"
          label={'LastName'}
          placeholder={'LastName'}
        />
        <ControlledInput
          testID="email-input"
          control={control}
          name="email"
          label={translate('login.email')}
          placeholder={translate('login.email')}
        />
        <ControlledInput
          testID="phoneNumber-input"
          control={control}
          name="phoneNumber"
          label="phoneNumber"
          placeholder="phoneNumber"
          secureTextEntry={true}
        />
        <Button
          label="Enregistrer"
          onPress={handleSubmit(handleFormSubmit)}
          className="my-8 h-12 rounded-lg"
          disabled={!form.formState.isValid}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

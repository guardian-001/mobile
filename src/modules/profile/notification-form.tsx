import { useRouter } from 'expo-router';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import type * as z from 'zod';

import { translate } from '@/core';
import {
  Button,
  ControlledInput,
  HeaderTitle,
  View,
} from '@/shared/components';
import useCustomForm from '@/shared/hooks/use-custom-form';
import { BasicInfoFormSchema } from '@/validations';

type BasicInfoFormType = z.infer<typeof BasicInfoFormSchema>;
type BasicInfoFormProps = {};

export const NotificationForm = ({}: BasicInfoFormProps) => {
  const { handleSubmit, control, form } = useCustomForm(BasicInfoFormSchema);
  const router = useRouter();

  const handleFormSubmit: SubmitHandler<BasicInfoFormType> = () => {
    router.back();
  };

  return (
    <View className="flex-1 bg-white dark:bg-black">
      <HeaderTitle text="profile.info" />
      <View className="flex-1 gap-4 p-6 pt-12">
        <ControlledInput
          testID="name-input"
          control={control}
          name="name"
          label={'Name'}
          placeholder={'Name'}
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
          testID="number-input"
          control={control}
          name="number"
          label="number"
          placeholder="number"
          secureTextEntry={true}
        />
        <Button
          label="Enregistrer"
          onPress={handleSubmit(handleFormSubmit)}
          className="my-8 h-12 rounded-lg"
          disabled={!form.formState.isValid}
        />
      </View>
    </View>
  );
};

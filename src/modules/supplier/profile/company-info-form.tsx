import React from 'react';
import { ActivityIndicator, Platform } from 'react-native';

import { translate } from '@/core';
import {
  Button,
  ControlledInput,
  ErrorData,
  HeaderTitle,
  KeyboardAvoidingView,
  ScrollView,
} from '@/shared/components';

import { useCompanyInformation } from './hooks/use-company-information';

export const CompanyInfoForm = () => {
  const {
    control,
    form,
    handleSubmit,
    onSubmit,
    isSuccess,
    isLoading,
    isError,
  } = useCompanyInformation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white pt-5 "
    >
      <HeaderTitle text="profile.info-company" type="default" />
      {isError && <ErrorData message="Error Loading Data" />}
      {isLoading && <ActivityIndicator />}
      {isSuccess && (
        <ScrollView
          className="flex-1 p-6 pt-12"
          contentContainerClassName="gap-4"
        >
          <ControlledInput
            testID="companyName-input"
            control={control}
            name="companyName"
            label={translate('labels.companyName')}
            placeholder={translate('labels.companyName')}
          />
          <ControlledInput
            testID="companySpeciality-input"
            control={control}
            name="companySpeciality"
            label={translate('labels.companySpeciality')}
            placeholder={translate('labels.companySpeciality')}
          />
          <ControlledInput
            testID="companyAddress-input"
            control={control}
            name="companyAddress"
            label={translate('labels.address')}
            placeholder={translate('labels.address')}
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

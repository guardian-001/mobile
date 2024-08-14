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
    <>
      <HeaderTitle text="profile.info" type="default" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 bg-white pt-5 "
      >
        {isError && <ErrorData message="Error Loading Data" />}
        {isLoading && <ActivityIndicator />}
        {isSuccess && (
          <ScrollView
            className="flex-1"
            contentContainerClassName="gap-4 p-6 pt-12"
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
          </ScrollView>
        )}
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

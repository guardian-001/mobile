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
  Text,
  View,
} from '@/shared/components';

import { useSocialLinks } from './hooks/use-social-links';

export const UpdateSocialLinks = () => {
  const {
    control,
    form,
    handleSubmit,
    onSubmit,
    isSuccess,
    isLoading,
    isError,
    socialLinks,
  } = useSocialLinks();

  return (
    <>
      <HeaderTitle text="profile.sociaux" type="default" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 bg-white"
      >
        {isError && <ErrorData message="Error Loading Data" />}
        {isLoading && <ActivityIndicator />}
        {isSuccess && (
          <ScrollView className="flex-1" contentContainerClassName="gap-4 p-6">
            <Text
              tx="supplierProfile.updateBioTitle"
              className="text-2xl font-extrabold"
            />
            <Text
              tx="supplierProfile.updateBioDescription"
              className="mb-4 text-base text-description"
            />
            {socialLinks.map(({ Icon, name }) => (
              <View
                key={name}
                className="mb-4 flex flex-row items-center gap-2"
              >
                <Icon />
                <ControlledInput
                  control={control}
                  name={name}
                  placeholder={translate('labels.link')}
                  className="mb-0 flex-1"
                />
              </View>
            ))}
          </ScrollView>
        )}
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

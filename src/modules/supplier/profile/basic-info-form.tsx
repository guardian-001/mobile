import React from 'react';
import { Platform } from 'react-native';

import { translate } from '@/core';
import {
  HeaderTitle,
  Item,
  ItemsContainer,
  KeyboardAvoidingView,
  ScrollView,
} from '@/shared/components';

import { useBasicInfo } from './hooks/use-basic-info';

export const BasicInfoForm = () => {
  const { navigateTo, user } = useBasicInfo();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white  "
    >
      <HeaderTitle text="profile.info" type="default" />
      <ScrollView
        className="flex-1 bg-background p-6 pt-12"
        contentContainerClassName="gap-4"
      >
        <ItemsContainer>
          <Item
            type="basicInformation"
            text="labels.mail"
            value={user?.email}
            onPress={() => navigateTo(`email-form/`)}
          />
          <Item
            text="labels.phone"
            type="basicInformation"
            value={user?.phoneNumber}
            onPress={() => navigateTo(`phone-number-form/`)}
          />
        </ItemsContainer>
        <ItemsContainer title="supplierProfile.about">
          <Item
            text="supplierProfile.bio"
            type="basicInformation"
            value={translate('supplierProfile.presentationBio')}
            onPress={() => navigateTo(`bio-form/`)}
          />
          <Item
            text="supplierProfile.video"
            type="basicInformation"
            value={translate('supplierProfile.presentationVideo')}
            onPress={() => navigateTo(`presentation-video/`)}
          />
        </ItemsContainer>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

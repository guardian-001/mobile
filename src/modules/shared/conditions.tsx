import React from 'react';
import { Linking } from 'react-native';

import { translate } from '@/core';
import { Text } from '@/shared/components';

import Container from './container';

export default function Conditions() {
  return (
    <Container style="flex w-full px-10   py-4  ">
      <Text className={`text-center text-xs text-primary-txt `}>
        {translate('login.termsConditionsPart1')}
        <Text
          onPress={() => {
            Linking.openURL(process.env.TERMS_URL || '');
          }}
          className={`text-xs font-bold text-primary-txt`}
        >
          {' '}
          {translate('login.termsConditionsPart2')}
        </Text>{' '}
        {translate('login.termsConditionsPart3')}
        <Text
          onPress={() => {
            Linking.openURL(process.env.PRIVACY_URL || '');
          }}
          className={`text-xs font-bold text-primary-txt  `}
        >
          {' '}
          {translate('login.termsConditionsPart4')}
        </Text>
      </Text>
    </Container>
  );
}

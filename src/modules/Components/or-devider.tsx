import React from 'react';
import { Text } from 'react-native';

import { translate } from '@/core';

import { Container, Devider } from '../shared';

export default function OrDevider() {
  return (
    <Container style="my-5 flex w-4/5 flex-row items-center justify-center">
      <Devider />
      <Text className={`text-md text-primary-txt`}>
        {translate('onBoarding.or')}
      </Text>
      <Devider />
    </Container>
  );
}

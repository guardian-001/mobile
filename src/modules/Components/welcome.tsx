import React from 'react';
import { Text, View } from 'react-native';

import { translate } from '@/core';

export default function Welcome() {
  return (
    <View>
      <Text className="text-start font-lato text-2xl font-extrabold text-primary-txt ">
        {translate('login.welcomeTitle')}
      </Text>
      <Text className="max-w-60 my-2 text-start font-lato text-sm text-description">
        {translate('login.welcomeText')}
      </Text>
    </View>
  );
}

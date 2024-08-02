import React from 'react';
import { Text, View } from 'react-native';

import { translate } from '@/core';

export default function WelcomeSupplier() {
  return (
    <View>
      <Text className="text-start font-lato text-2xl font-extrabold text-primary-txt ">
        {translate('loginSupplier.bienvenueSurArchimatch')}
      </Text>
      <Text className="text-start font-lato text-2xl font-extrabold text-primary-txt ">
        {translate('loginSupplier.kitPartenariatPro')}
      </Text>
    </View>
  );
}

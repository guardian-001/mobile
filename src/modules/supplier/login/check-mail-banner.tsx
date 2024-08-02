import React from 'react';
import { Text, View } from 'react-native';

import { ErrorImg } from '@/assets/icons/archimatch';
import { translate } from '@/core';

export default function CheckMailBanner() {
  return (
    <View className="flex h-full w-full items-center justify-center gap-5">
      <ErrorImg />
      <Text className="text-center text-xl">
        {translate('loginSupplier.errorLoginPage')}
      </Text>
    </View>
  );
}

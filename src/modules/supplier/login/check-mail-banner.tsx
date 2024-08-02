import React from 'react';
import { Text, View } from 'react-native';

import { ErrorImg } from '@/assets/icons/archimatch';

export default function CheckMailBanner() {
  return (
    <View className="flex h-full w-full items-center justify-center gap-5">
      <ErrorImg />
      <Text className="text-center text-xl">
        There are no account matches with this email
      </Text>
    </View>
  );
}

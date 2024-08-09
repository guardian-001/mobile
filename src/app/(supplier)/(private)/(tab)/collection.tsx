import React from 'react';
import { Text } from 'react-native';

import { FocusAwareStatusBar, View } from '@/shared/components';

export default function Inspiration() {
  return (
    <View className="h-full w-full flex-1 items-center justify-center">
      <FocusAwareStatusBar />
      <Text>Collection</Text>
    </View>
  );
}

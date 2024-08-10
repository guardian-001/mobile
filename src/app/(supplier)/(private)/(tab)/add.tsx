import React from 'react';

import { FocusAwareStatusBar, Text, View } from '@/shared/components';

export default function Home() {
  return (
    <View className="h-full w-full flex-1 items-center justify-center">
      <FocusAwareStatusBar />
      <Text>add</Text>
    </View>
  );
}

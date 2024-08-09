import React from 'react';

import { FocusAwareStatusBar, Text, View } from '@/shared/components';

export default function Explorer() {
  return (
    <View className="h-full w-full flex-1 items-center justify-center">
      <FocusAwareStatusBar />
      <Text>Share</Text>
    </View>
  );
}

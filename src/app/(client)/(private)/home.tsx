import React from 'react';

import { FocusAwareStatusBar, View } from '@/shared/components';

export default function Home() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
    </View>
  );
}

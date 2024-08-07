import React from 'react';

import Home from '@/modules/client/explore/home';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function Explorer() {
  return (
    <View className="flex-1 ">
      <FocusAwareStatusBar />
      <Home />
    </View>
  );
}

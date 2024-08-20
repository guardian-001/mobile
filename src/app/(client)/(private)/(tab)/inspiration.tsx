import React from 'react';

import InspirationPage from '@/modules/client/inspiration/inspiration';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function Inspiration() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <InspirationPage />
    </View>
  );
}

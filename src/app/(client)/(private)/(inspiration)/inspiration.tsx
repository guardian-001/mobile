import React from 'react';

import InspirationStepper from '@/modules/client/inspiration/stepper-inspiration-choice';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function Inspiration() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <InspirationStepper />
    </View>
  );
}

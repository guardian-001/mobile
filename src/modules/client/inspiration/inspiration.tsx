import React from 'react';

import { View } from '@/shared/components';

import InspirationScrolling from './inspiration-scrolling';
import InspirationStepper from './stepper-inspiration-choice';

export default function InspirationPage() {
  return (
    <View className="flex-1 bg-white">
      {false ? <InspirationStepper /> : <InspirationScrolling />}
    </View>
  );
}

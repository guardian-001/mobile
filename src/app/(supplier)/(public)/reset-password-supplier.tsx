import React from 'react';

import { useSoftKeyboardEffect } from '@/core/keyboard';
import ResetStepper from '@/modules/reset-password/reset-stepper';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function ResetPasswordClient() {
  useSoftKeyboardEffect();

  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <ResetStepper />
    </View>
  );
}

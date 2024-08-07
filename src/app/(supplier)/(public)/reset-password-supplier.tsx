import React from 'react';

import ResetStepper from '@/modules/reset-password/reset-stepper';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function ResetPasswordClient() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <ResetStepper />
    </View>
  );
}

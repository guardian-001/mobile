import React from 'react';

import { useSoftKeyboardEffect } from '@/core/keyboard';
import ResetStepper from '@/modules/password-creation/creation-pass-supplier';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function ResetPasswordClient() {
  useSoftKeyboardEffect();

  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <ResetStepper initialStep={0} />
    </View>
  );
}

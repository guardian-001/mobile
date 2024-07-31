import React from 'react';

import { useSoftKeyboardEffect } from '@/core/keyboard';
import ResetFormPasswordProfile from '@/modules/profile/reset-form-password-profile';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function ResetPasswordClient() {
  useSoftKeyboardEffect();

  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <ResetFormPasswordProfile />
    </View>
  );
}

import React from 'react';

import { useSoftKeyboardEffect } from '@/core/keyboard';
import UpdatePasswordProfile from '@/modules/profile/update-password-profile';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function ResetPasswordClient() {
  useSoftKeyboardEffect();

  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <UpdatePasswordProfile />
    </View>
  );
}

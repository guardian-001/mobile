import React from 'react';

import UpdatePasswordProfile from '@/modules/supplier/profile/update-password-profile';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function ResetPasswordClient() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <UpdatePasswordProfile />
    </View>
  );
}

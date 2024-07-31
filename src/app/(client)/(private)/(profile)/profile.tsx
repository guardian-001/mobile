import React from 'react';

import { useAuth } from '@/core';
import { getStatus } from '@/core/auth/utils';
import ClientProfile from '@/modules/profile/client-profile';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function Profile() {
  const status = getStatus();
  console.log(status);
  const { token, user } = useAuth.getState();
  console.log(token, user);
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <ClientProfile />
    </View>
  );
}

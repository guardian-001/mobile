import React from 'react';

import ClientProfile from '@/modules/profile/client-profile';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function Profile() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <ClientProfile />
    </View>
  );
}

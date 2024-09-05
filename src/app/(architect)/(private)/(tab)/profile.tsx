import React from 'react';

import ArchitectProfile from '@/modules/architect/profile/profile/architect-profile';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function Profile() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <ArchitectProfile />
    </View>
  );
}

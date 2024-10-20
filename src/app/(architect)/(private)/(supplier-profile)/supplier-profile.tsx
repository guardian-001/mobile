import React from 'react';

import SupplierProfile from '@/modules/architect/supplier-tab/supplier-profile/supplier-profile';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function Profile() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <SupplierProfile />
    </View>
  );
}

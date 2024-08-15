import React from 'react';

import { SubscriptionManagement } from '@/modules/supplier/profile/subscription-management';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function Subscription() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <SubscriptionManagement />
    </View>
  );
}

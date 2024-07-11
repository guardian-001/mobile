import React from 'react';

import { NotificationForm } from '@/modules/profile/notification-form';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function Notification() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <NotificationForm />
    </View>
  );
}

import React from 'react';

import { BasicInfoForm } from '@/modules/profile/basic-info-form';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function BasicInformation() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <BasicInfoForm />
    </View>
  );
}

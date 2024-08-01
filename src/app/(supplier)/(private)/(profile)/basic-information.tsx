import React from 'react';

import { useSoftKeyboardEffect } from '@/core/keyboard';
import { BasicInfoForm } from '@/modules/profile/basic-info-form';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function BasicInformation() {
  useSoftKeyboardEffect();

  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <BasicInfoForm />
    </View>
  );
}

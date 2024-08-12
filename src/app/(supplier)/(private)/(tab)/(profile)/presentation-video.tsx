import React from 'react';

import { UpdatePresentationVideoForm } from '@/modules/supplier/profile/update-video-form';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function PresentationVideo() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <UpdatePresentationVideoForm />
    </View>
  );
}

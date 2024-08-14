import React from 'react';

import { UpdateSocialLinks } from '@/modules/supplier/profile/update-social-links';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function SocialLinks() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <UpdateSocialLinks />
    </View>
  );
}

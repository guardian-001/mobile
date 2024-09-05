import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { AddProductImg } from '@/assets/icons/archimatch/add-product';
import { Text } from '@/shared/components';

import DemoRequest from './demo-request';
import { useProfileWork } from './hooks/use-profile-work';

export default function ProfileWork() {
  const { navigateToRealization } = useProfileWork();
  return (
    <View className="mb-10 mt-2 flex  w-full flex-1  items-center justify-center">
      <TouchableOpacity
        onPress={navigateToRealization}
        className="mb-10 mt-2 flex  w-full flex-1  items-center justify-center"
      >
        <View className="  flex w-10/12  items-center justify-center rounded-3xl border  border-dashed border-color-border pt-5   ">
          <AddProductImg />
          <Text
            className="text-center text-base font-semibold"
            tx={'architectProfile.shareProject'}
          />
          <Text
            className="text-center text-sm text-description"
            tx={'architectProfile.shareProjectDescription'}
          />
        </View>
      </TouchableOpacity>
      <DemoRequest />
    </View>
  );
}

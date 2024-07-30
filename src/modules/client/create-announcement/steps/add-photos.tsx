import React from 'react';

import { View } from '@/shared/components';

import ImagePickerComponent from '../components/image-picker';

export function AddPhotos() {
  return (
    <View className="flex flex-1 items-center justify-between pt-8">
      <ImagePickerComponent />
    </View>
  );
}

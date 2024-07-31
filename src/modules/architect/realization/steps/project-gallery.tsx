import React from 'react';

import { Text, View } from '@/shared/components';

import ImagePickerComponent from '../shared/components/image-picker';

export function ProjectGallery() {
  return (
    <View className="mb-5 flex h-full w-full flex-1 items-start justify-between gap-6  ">
      <View className="mb-2">
        <Text
          tx={'realisation.galleryStep.title'}
          className="mb-2 text-start text-2xl font-extrabold"
        />
        <Text
          tx={'realisation.galleryStep.description'}
          className="max-w-xs text-start text-sm text-description"
        />
      </View>

      <ImagePickerComponent />
    </View>
  );
}

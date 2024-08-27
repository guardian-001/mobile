import React from 'react';
import { View } from 'react-native';

import { Video, VideoUpload } from '@/assets/icons/archimatch';
import { translate } from '@/core';

import { Button } from './button';
import { Text } from './text';
type VideoProps = {
  pickVideo: () => void;
};
export function VideoUploader({ pickVideo }: VideoProps) {
  return (
    <View className="flex w-full  items-center justify-center rounded-lg border border-dashed border-color-border">
      <VideoUpload />
      <Text
        tx="supplierProfile.presentationVideoDescription"
        className="mx-8 mb-4 text-center text-base text-description"
      />
      <Button
        label={translate('supplierProfile.presentationVideoButton')}
        onPress={pickVideo}
        className="mx-4 mb-10 flex h-12 items-center justify-center gap-4 rounded-lg"
        leftIconClassName=" "
        leftIcon={<Video />}
      />
    </View>
  );
}

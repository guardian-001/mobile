import { ResizeMode } from 'expo-av';
import React from 'react';
import { View } from 'react-native';

import { Video } from '@/shared/components';

export default function VideoSelect({
  presentationVideo,
}: {
  presentationVideo: string;
}) {
  return (
    <View>
      <Video
        className="h-64 w-full rounded-lg"
        source={{ uri: presentationVideo }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping={false}
      />
    </View>
  );
}

import { ResizeMode } from 'expo-av';
import React from 'react';

import { ScrollView, Text, Video, View } from '@/shared/components';

import { architect } from '../../inspiration/dump-data/architect-profile';
import { useAbout } from './hooks/use-about';

export default function About() {
  const { iconData } = useAbout();
  return (
    <ScrollView contentContainerClassName="bg-white p-4">
      {architect.presentationVideo && (
        <Video
          className="h-64 w-full rounded-xl"
          source={{ uri: architect.presentationVideo }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping={false}
        />
      )}
      <Text tx="inspiration.about" className="my-5 text-lg font-bold" />
      <Text className="mb-4 text-sm">{architect?.bio}</Text>
      <View className="gap-4">
        {iconData.map(({ id, icon: IconComponent, label }) => (
          <View key={id} className="flex-row items-center gap-3">
            <IconComponent />
            <Text className="text-sm">{label}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

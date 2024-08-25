import { ResizeMode } from 'expo-av';
import React from 'react';

import { Image, ScrollView, Text, Video, View } from '@/shared/components';

import { architect } from '../dump-data/architect-profile';

export default function About() {
  return (
    <ScrollView contentContainerClassName="bg-white p-4 pb-0">
      <Text tx="inspiration.aboutUs" className="text-lg font-bold" />
      <Text className="text-base">{architect?.bio}</Text>
      {architect.presentationVideo && (
        <Video
          className="my-2 h-64 w-full rounded-lg"
          source={{ uri: architect.presentationVideo }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping={false}
        />
      )}
      <Text tx="inspiration.services" className="font-bold" />
      <Text
        tx="inspiration.approvedServicesRequired"
        className="mb-4 text-sm font-medium text-description"
      />
      {architect.servicesApprouves.map((service, index) => (
        <View key={index} className="my-3 flex-row items-center gap-3">
          <Image
            className="h-9 w-9 overflow-hidden"
            source={{ uri: service.icon }}
            contentFit="contain"
          />
          <Text className="text-sm font-medium">{service.label}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

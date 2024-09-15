import React from 'react';

import { Image, Text, View } from '@/shared/components';

import { useFinalStep } from '../hooks';

export default function Services() {
  const { servicesObjects } = useFinalStep();
  return (
    <View className="mt-6 flex w-full gap-8">
      {servicesObjects?.map((item) => {
        return (
          <View
            className="flex flex-row items-center justify-start gap-2"
            key={item.id}
          >
            <Image
              className="  mt-1  h-5 w-5"
              source={{ uri: item.icon }}
              contentFit="contain"
            />
            <Text className="max-w-xs">{item.label}</Text>
          </View>
        );
      })}
    </View>
  );
}

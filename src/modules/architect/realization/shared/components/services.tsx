import { Env } from '@env';
import React from 'react';

import { Image, Text, View } from '@/shared/components';

import { useFinalStep } from '../hooks';

export default function Services() {
  const { servicesObjects } = useFinalStep();
  return (
    <View className="flex w-full gap-8">
      {servicesObjects?.map((item) => {
        const imgUrl = `${Env.API_URL}${item.icon}`;

        return (
          <View
            className="flex flex-row items-start justify-start gap-2"
            key={item.id}
          >
            <Image
              className="  h-5  w-5"
              source={{ uri: imgUrl }}
              contentFit="contain"
            />
            <Text>{item.label}</Text>
          </View>
        );
      })}
    </View>
  );
}

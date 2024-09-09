import React from 'react';

import { translate } from '@/core';
import { Button, Image, ScrollView, Text, View } from '@/shared/components';

import { useProjectDetailsModal } from '../hooks/use-project-details-modal';
import type { ProjectItemProps } from '../types';

export const ProjectDetailsModal = React.memo(({ item }: ProjectItemProps) => {
  const { details, navigateToProfile } = useProjectDetailsModal({ item });
  return (
    <ScrollView contentContainerClassName="px-4">
      <Text className="mb-2 font-extrabold">{item?.propertyType.label}</Text>
      <Text className="text-sm font-medium">{item?.description}</Text>
      <View className="my-4 gap-4 pl-3">
        {details.map((detail, index) => {
          const Icon = detail.icon;
          return (
            <View
              key={index}
              className="flex-row gap-4 border-b border-dashed border-gray-200 pb-3"
            >
              <View className="mt-2">
                <Icon />
              </View>
              <View>
                <Text tx={detail.title} className="mb-1 font-bold" />
                <Text className="text-sm font-medium text-description">
                  {detail.value}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
      <View className="my-3 flex flex-row items-center gap-4">
        <Image
          source={require('@/assets/images/architecteImage.jpg')}
          className="h-12 w-12 rounded-full"
          contentFit="cover"
        />
        <View>
          <Text className="font-bold">
            {item?.architect.user.firstName} {item?.architect.user.lastName}
          </Text>
          <Text className="text-sm">
            {item?.architect.architectSpeciality.label}
          </Text>
        </View>
      </View>
      <Button
        label={translate('inspiration.launchYourProject')}
        onPress={navigateToProfile}
        textClassName="text-sm"
        className="my-4 h-12 w-[95%] self-center rounded-lg"
      />
    </ScrollView>
  );
});

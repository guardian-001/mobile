import React from 'react';
import { FlatList } from 'react-native';

import {
  colors,
  GradientBackground,
  Image,
  ImageContainer,
  ScrollView,
  Text,
  View,
} from '@/shared/components';

import { useProjectDetails } from './hooks/use-project-details';

export default function ProjectDetails() {
  const {
    snapToOffsets,
    renderItem,
    handleScroll,
    currentIndex,
    totalImages,
    details,
    project,
  } = useProjectDetails();

  return (
    <View className="flex-1">
      <GradientBackground colors={[colors.white, colors['extra-light-blue']]}>
        <Text
          tx="inspiration.projectDetails"
          className="my-12 text-center text-xl font-bold"
        />
      </GradientBackground>
      <ScrollView contentContainerClassName="p-[16px]">
        <ImageContainer className="-mt-10 h-96 w-full">
          <FlatList
            data={project.realizationImages ?? []}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            snapToOffsets={snapToOffsets}
            scrollEventThrottle={16}
          />
          <View className="absolute inset-x-0 bottom-0 flex-row justify-center pb-3">
            {Array.from({ length: totalImages }).map((_, index) => (
              <View
                key={index}
                className={`mx-1 h-2 w-2 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-background/30'
                }`}
              />
            ))}
          </View>
        </ImageContainer>
        <Text className="mb-2 mt-4 font-extrabold">
          {project.propertyType.label}
        </Text>
        <Text className="text-sm font-medium">{project.description}</Text>
        <View className="my-4 gap-4 pl-8">
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
              {project.architect.user.firstName}{' '}
              {project.architect.user.lastName}
            </Text>
            <Text className="text-sm">
              {project.architect.architectSpeciality.label}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

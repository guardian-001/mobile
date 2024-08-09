import * as React from 'react';
import { ActivityIndicator } from 'react-native';

import { Notification, User } from '@/assets/icons';
import { StartProject } from '@/modules/shared';
import {
  Button,
  Card,
  colors,
  ErrorData,
  GradientBackground,
  ScrollView,
  Tag,
  Text,
  View,
} from '@/shared/components';

import { useExplore } from './hooks/use-explore';

export default function Home() {
  const {
    router,
    appStatus,
    CategoryData,
    isErrorCategory,
    isLoadingCategory,
    isSuccessCategory,
    selectedCategory,
    PropertyData,
    isErrorPropertyType,
    isLoadingPropertyType,
    isSuccessPropertyType,
    control,
  } = useExplore();
  return (
    <ScrollView
      contentContainerClassName="min-h-full bg-white"
      showsVerticalScrollIndicator={false}
    >
      <GradientBackground colors={[colors.white, colors['extra-light-blue']]}>
        <View className="p-4">
          {appStatus ? (
            <View className="flex flex-row justify-between">
              <Button
                icon={<User color="white" />}
                onPress={() => {
                  router.push(`/(client)/(profile)/profile`);
                }}
                className="my-8 h-12 w-12 rounded-lg"
              />
              <Button
                icon={<Notification />}
                onPress={() => {}}
                className="my-8 h-12 w-12 rounded-lg bg-white"
              />
            </View>
          ) : (
            <View className="h-10" />
          )}
          <StartProject />
          <Text className="mt-4 text-base font-bold" tx="explore.explore" />
          {isErrorCategory && <ErrorData message="Error Loading Data" />}
          {isLoadingCategory && <ActivityIndicator />}
        </View>
        {isSuccessCategory && (
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="px-4"
            className="max-h-16 "
          >
            {CategoryData?.map((tag) => (
              <Tag
                key={tag.id}
                label={tag.label}
                name="projectCategory"
                control={control}
                imageIcon={tag.icon}
                className="flex h-12 max-w-xl flex-row items-center justify-evenly"
                obligation={true}
              />
            ))}
          </ScrollView>
        )}
      </GradientBackground>
      {isErrorPropertyType && <ErrorData message="Error Loading Data" />}
      {isLoadingPropertyType && <ActivityIndicator />}
      {isSuccessPropertyType && isSuccessCategory && (
        <>
          <Text className="mx-4 mb-4 text-base font-bold">
            {selectedCategory}
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="gap-x-4 px-4"
          >
            {PropertyData?.map((tag) => (
              <Card key={tag.id} label={tag.label} imageIcon={tag.icon} />
            ))}
          </ScrollView>
        </>
      )}
    </ScrollView>
  );
}

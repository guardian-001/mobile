import * as React from 'react';
import { ActivityIndicator } from 'react-native';

import { StartProject } from '@/modules/shared';
import {
  Card,
  ErrorData,
  ScrollView,
  Tag,
  Text,
  View,
} from '@/shared/components';

import { Layout } from '../components/layout';
import { useExplore } from './hooks/use-explore';

export default function Home() {
  const {
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
      <Layout>
        <View className="p-4">
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
      </Layout>
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

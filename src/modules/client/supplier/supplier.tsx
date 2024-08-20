import * as React from 'react';
import { ActivityIndicator } from 'react-native';

import { Filter } from '@/assets/icons';
import { ErrorData, ScrollView, Tag, Text, View } from '@/shared/components';

import { Layout } from '../components/layout';
import { useSupplier } from './hooks/use-supplier';

export default function SupplierPage() {
  const {
    control,
    specialityTypesData,
    isLoadingSpeciality,
    isErrorSpeciality,
    isSuccessSpeciality,
  } = useSupplier();
  return (
    <ScrollView
      contentContainerClassName="min-h-full bg-white"
      showsVerticalScrollIndicator={false}
    >
      <Layout>
        <View className="p-4">
          <Text className="mt-4 text-base font-bold" tx="explore.explore" />
          {isErrorSpeciality && <ErrorData message="Error Loading Data" />}
          {isLoadingSpeciality && <ActivityIndicator />}
        </View>
        {isSuccessSpeciality && (
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="px-4"
            className="max-h-16 "
          >
            {specialityTypesData?.map((tag) => (
              <Tag
                key={tag.id}
                label={tag.displayName}
                name="specialityType"
                control={control}
                imageIcon={tag.imageIcon}
                className="flex h-12 max-w-xl flex-row items-center justify-evenly"
                obligation={true}
              />
            ))}
          </ScrollView>
        )}
      </Layout>
      <View className="mt-8 flex flex-row px-4">
        <View className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-light-blue">
          <Filter />
        </View>
        <View className="" />
      </View>
    </ScrollView>
  );
}

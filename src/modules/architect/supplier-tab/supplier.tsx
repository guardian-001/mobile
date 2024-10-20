import * as React from 'react';
import { ActivityIndicator } from 'react-native';

import { Location, Search } from '@/assets/icons';
import { translate } from '@/core';
import {
  Button,
  ControlledInput,
  EmptyList,
  ErrorData,
  Options,
  ScrollView,
  Tag,
  Text,
  View,
} from '@/shared/components';

import { Layout } from './components/layout';
import { SupplierCard } from './components/supplier-card';
import { useSupplier } from './hooks/use-supplier';

export default function SupplierTab() {
  const {
    control,
    specialityTypesData,
    isLoadingSpeciality,
    isErrorSpeciality,
    isSuccessSpeciality,
    filteredSuppliers,
    isLoadingSuppliers,
    isErrorSuppliers,
    isSuccessSuppliers,
    onSelectOption,
    cityOptions,
    modal,
    field,
    searchControl,
  } = useSupplier();
  return (
    <View className="w-full flex-1">
      <View className="min-h-full  bg-background">
        <Layout>
          <Text
            className="m-4 text-base font-bold"
            tx="searchSupplier.searchSupplier"
          />
          {isErrorSpeciality && <ErrorData message="Error Loading Data" />}
          {isLoadingSpeciality && <ActivityIndicator />}
          {isSuccessSpeciality && (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerClassName="px-4"
              className="max-h-16 "
            >
              {Array.isArray(specialityTypesData) &&
                specialityTypesData?.map((tag) => (
                  <Tag
                    key={tag.id}
                    label={tag.label}
                    name="specialityType"
                    control={control}
                    imageIcon={tag.icon}
                    className="flex h-12 max-w-xl flex-row items-center justify-evenly"
                    obligation={true}
                  />
                ))}
            </ScrollView>
          )}
        </Layout>
        <View className="mb-2 mt-4 flex flex-row px-4">
          <Button
            icon={<Location />}
            onPress={modal.present}
            className="!my-0 mr-4 h-12 w-12 rounded-lg"
            alternativeBg="bg-light-blue"
          />
          <ControlledInput
            icon={<Search />}
            control={searchControl}
            name="search"
            placeholder={translate('labels.search')}
            className="flex-1"
          />
        </View>
        {isErrorSuppliers && <ErrorData message="Error Loading Data" />}
        <View className="flex flex-1 px-4 pb-6 ">
          {(isLoadingSuppliers || filteredSuppliers?.length === 0) && (
            <EmptyList isLoading={isLoadingSuppliers} />
          )}
          {isSuccessSuppliers && (
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerClassName="gap-4 pb-2"
            >
              {filteredSuppliers?.map((supplier) => (
                <SupplierCard key={supplier.id} supplier={supplier} />
              ))}
            </ScrollView>
          )}
        </View>
      </View>
      <Options
        ref={modal.ref}
        options={cityOptions}
        onSelect={onSelectOption}
        value={field.value}
      />
    </View>
  );
}

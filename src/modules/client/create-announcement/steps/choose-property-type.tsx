import React from 'react';

import type { resultType } from '@/api/client/announcements/types';
import { StepButtons } from '@/modules/shared';
import {
  EmptyList,
  ErrorData,
  ScrollView,
  Text,
  ToggleCard,
  View,
} from '@/shared/components';

import { usePropertyType } from '../hooks';

export function ChoosePropertyType() {
  const {
    onRollBack,
    handleSubmit,
    control,
    error,
    onSubmit,
    PropertyData,
    isError,
    isLoading,
    isSuccess,
  } = usePropertyType();
  return (
    <View className="flex-1 pt-4">
      {isError && <ErrorData message="Error Loading Data" />}
      <View className="flex flex-1 justify-between ">
        <View className="flex-1">
          {(isLoading || PropertyData?.length === 0) && (
            <EmptyList isLoading={isLoading} />
          )}
          {isSuccess && (
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerClassName="gap-4"
            >
              {PropertyData?.map((propertyType: resultType) => (
                <ToggleCard
                  key={propertyType.id}
                  className="flex h-16 w-full flex-row-reverse justify-between rounded-lg pl-8 pr-0"
                  title={propertyType.label}
                  imageIcon={propertyType.icon}
                  name="propertyType"
                  control={control}
                  value={propertyType.id}
                />
              ))}
            </ScrollView>
          )}
          {error && (
            <Text className="text-sm text-error dark:text-error" tx={error} />
          )}
        </View>
        <StepButtons
          previous={{
            handlePreviousStep: onRollBack,
            label: 'common.back',
          }}
          next={{
            handleSubmit: handleSubmit(onSubmit),
            label: 'common.next',
          }}
        />
      </View>
    </View>
  );
}

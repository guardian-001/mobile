import React from 'react';

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
  } = usePropertyType();
  return (
    <View className="flex-1 pt-4">
      {isError ? (
        <ErrorData message="Error Loading Data" />
      ) : (
        <View className="flex flex-1 justify-between ">
          <View className="flex-1">
            {isLoading || PropertyData?.length === 0 ? (
              <EmptyList isLoading={isLoading} />
            ) : (
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerClassName="gap-4"
              >
                {PropertyData?.map((cardData) => (
                  <ToggleCard
                    key={cardData.id}
                    className="flex h-16 w-full flex-row-reverse justify-between rounded-lg pl-8 pr-0"
                    title={cardData.label}
                    imageIcon={cardData.icon}
                    name="propertyType"
                    control={control}
                    value={cardData.id}
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
      )}
    </View>
  );
}

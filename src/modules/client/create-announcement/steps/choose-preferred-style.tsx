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

import { usePreferredStyle } from '../hooks';

export function ChoosePreferredStyle() {
  const {
    onRollBack,
    handleSubmit,
    control,
    error,
    onSubmit,
    architecturalStyles,
    isError,
    isLoading,
    isFetchedAfterMount,
  } = usePreferredStyle();
  return (
    <View className="flex-1 pt-4">
      {isError ? (
        <ErrorData message="Error Loading Data" />
      ) : (
        <View className="flex flex-1 justify-between">
          <View className="flex-1">
            {isLoading || architecturalStyles?.length === 0 ? (
              <EmptyList isLoading={isLoading || isFetchedAfterMount} />
            ) : (
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerClassName="gap-4"
              >
                {architecturalStyles.map((cardData) => (
                  <ToggleCard
                    key={cardData.id}
                    className="h-16 w-full !items-start rounded-lg"
                    title={cardData.label}
                    name="architecturalStyle"
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

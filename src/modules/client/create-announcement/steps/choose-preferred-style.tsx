import React from 'react';

import { StepButtons } from '@/modules/shared';
import {
  EmptyList,
  ErrorData,
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
              <View className=" gap-4">
                {architecturalStyles.map((cardData, index) => (
                  <ToggleCard
                    key={index}
                    className="h-16 w-full !items-start rounded-lg"
                    title={cardData.label}
                    name="architecturalStyle"
                    control={control}
                    value={cardData.id}
                  />
                ))}
              </View>
            )}
            {error && (
              <Text className="text-sm text-error dark:text-error" tx={error} />
            )}
          </View>

          <StepButtons
            previous={{
              handlePreviousStep: onRollBack,
              label: 'signup.retour',
            }}
            next={{
              handleSubmit: handleSubmit(onSubmit),
              label: 'signup.suivant',
            }}
          />
        </View>
      )}
    </View>
  );
}

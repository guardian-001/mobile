import React from 'react';

import { StepButtons } from '@/modules/shared';
import {
  EmptyList,
  ErrorData,
  Text,
  ToggleCard,
  View,
} from '@/shared/components';

import { useCategory } from '../hooks';

export function ChooseCategory() {
  const {
    onRollBack,
    handleSubmit,
    control,
    error,
    onSubmit,
    CategoryData,
    isError,
    isLoading,
  } = useCategory();
  return (
    <View className="flex-1 pt-8">
      {isError ? (
        <ErrorData message="Error Loading Data" />
      ) : (
        <View className="flex flex-1 justify-between">
          {isLoading || CategoryData?.length === 0 ? (
            <EmptyList isLoading={isLoading} />
          ) : (
            <View className="flex flex-row flex-wrap items-center gap-4">
              {CategoryData?.map((cardData) => (
                <ToggleCard
                  key={cardData.id}
                  className="h-full w-full rounded-lg"
                  containerClassName="min-h-[40%] min-w-[40%] max-w-[48%] max-h-[48%] rounded-lg"
                  title={cardData.label}
                  image={cardData.icon}
                  name="projectCategory"
                  control={control}
                  value={cardData.id}
                />
              ))}
            </View>
          )}
          {error && (
            <Text className="text-sm text-error dark:text-error" tx={error} />
          )}
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

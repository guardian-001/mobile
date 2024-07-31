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
    isSuccess,
  } = useCategory();
  return (
    <View className="flex-1 pt-8">
      {isError && <ErrorData message="Error Loading Data" />}
      <View className="flex flex-1 justify-between">
        {(isLoading || CategoryData?.length === 0) && (
          <EmptyList isLoading={isLoading} />
        )}
        {isSuccess && (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerClassName="min-h-[85%] flex flex-row flex-wrap items-center gap-4"
          >
            {CategoryData?.map((Category: resultType) => (
              <ToggleCard
                key={Category.id}
                className="h-full w-full rounded-lg"
                containerClassName="min-h-[40%] min-w-[40%] max-w-[48%] max-h-[48%] rounded-lg"
                title={Category.label}
                image={Category.icon}
                name="projectCategory"
                control={control}
                value={Category.id}
              />
            ))}
          </ScrollView>
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
    </View>
  );
}

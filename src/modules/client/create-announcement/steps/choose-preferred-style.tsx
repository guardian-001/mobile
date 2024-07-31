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
    isSuccess,
  } = usePreferredStyle();
  return (
    <View className="flex-1 pt-4">
      {isError && <ErrorData message="Error Loading Data" />}
      <View className="flex flex-1 justify-between">
        <View className="flex-1">
          {(isLoading || architecturalStyles?.length === 0) && (
            <EmptyList isLoading={isLoading || isFetchedAfterMount} />
          )}
          {isSuccess && (
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerClassName="gap-4"
            >
              {architecturalStyles.map((style: resultType) => (
                <ToggleCard
                  key={style.id}
                  className="h-16 w-full !items-start rounded-lg"
                  title={style.label}
                  name="architecturalStyle"
                  control={control}
                  value={style.id}
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

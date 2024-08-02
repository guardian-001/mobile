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

import { useNeeds } from '../hooks';

export function ChooseNeeds() {
  const {
    onRollBack,
    handleSubmit,
    control,
    error,
    onSubmit,
    NeedsData,
    isError,
    isLoading,
    isSuccess,
  } = useNeeds();

  return (
    <View className="flex-1 pt-4">
      {isError && <ErrorData message="Error Loading Data" />}

      <View className="flex flex-1 justify-between">
        <View className="flex-1">
          {(isLoading || NeedsData?.length === 0) && (
            <EmptyList isLoading={isLoading} />
          )}
          {isSuccess && (
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerClassName="gap-4"
            >
              {NeedsData?.map((need: resultType) => (
                <ToggleCard
                  key={need.id}
                  className="flex h-16 w-full flex-row rounded-lg"
                  title={need.label}
                  imageIcon={need.icon}
                  name="needs"
                  control={control}
                  multi={true}
                  value={need.id}
                />
              ))}
            </ScrollView>
          )}
          {error && <Text className="text-sm text-error " tx={error} />}
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

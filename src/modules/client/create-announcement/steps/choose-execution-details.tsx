import React from 'react';

import { StepButtons } from '@/modules/shared';
import { EmptyList, ErrorData, TagGroup, View } from '@/shared/components';

import { useExecutionDetails } from '../hooks';
export function ChooseExecutionDetails() {
  const {
    onRollBack,
    handleSubmit,
    control,
    onSubmit,
    budgets,

    errorBudget,
    isError,
    isLoading,
  } = useExecutionDetails();
  return (
    <View className="flex-1 pt-4">
      {isError ? (
        <ErrorData message="Error Loading Data" />
      ) : (
        <View className="flex flex-1 justify-between">
          {isLoading || budgets?.length === 0 ? (
            <EmptyList isLoading={isLoading} />
          ) : (
            <View className="gap-4">
              <TagGroup
                name="budget"
                control={control}
                tags={budgets ?? []}
                label="announcement.budgetLabel"
                error={errorBudget}
              />
            </View>
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

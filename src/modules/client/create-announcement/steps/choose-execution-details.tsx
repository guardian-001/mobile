import React from 'react';

import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import {
  ControlledInput,
  EmptyList,
  ErrorData,
  ScrollView,
  TagGroup,
  View,
} from '@/shared/components';

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
    isSuccess,
  } = useExecutionDetails();
  return (
    <View className="flex-1 pt-4">
      {isError && <ErrorData message="Error Loading Data" />}
      <View className="flex flex-1 justify-between">
        {(isLoading || budgets?.length === 0) && (
          <EmptyList isLoading={isLoading} />
        )}
        {isSuccess && (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerClassName="gap-4"
          >
            <TagGroup
              name="budget"
              control={control}
              tags={budgets ?? []}
              label="announcement.budgetLabel"
              error={errorBudget}
            />
            <ControlledInput
              required={true}
              control={control}
              name="description"
              labelStyle="text-base font-bold"
              className="mb-7 mt-5 gap-2"
              label={translate('announcement.projectDetailsLabel')}
              placeholder={translate('announcement.projectDetailsPlaceholder')}
              inputAreaType="textArea"
            />
          </ScrollView>
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

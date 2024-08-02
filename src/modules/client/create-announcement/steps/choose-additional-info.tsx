import React from 'react';

import type { PropertyFeature } from '@/api/client/announcements/types';
import { StepButtons } from '@/modules/shared';
import {
  EmptyList,
  ErrorData,
  ScrollView,
  Text,
  ToggleCard,
  View,
} from '@/shared/components';

import { useAdditionalInfo } from '../hooks';

export function ChooseAdditionalInfo() {
  const {
    onRollBack,
    handleSubmit,
    control,
    error,
    onSubmit,
    ExtensionsData,
    isError,
    isLoading,
    isSuccess,
  } = useAdditionalInfo();
  return (
    <View className="flex-1 pt-4">
      {isError && <ErrorData message="Error Loading Data" />}
      <View className="flex flex-1 justify-between">
        <View className="flex-1">
          {(isLoading || ExtensionsData?.length === 0) && (
            <EmptyList isLoading={isLoading} />
          )}
          {isSuccess && (
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerClassName="flex flex-1 flex-row flex-wrap gap-4 justify-center "
            >
              {ExtensionsData.map((projectExtension: PropertyFeature) => (
                <ToggleCard
                  key={projectExtension.id}
                  className="flex h-full w-full flex-row-reverse !justify-end rounded-lg"
                  containerClassName="h-8 min-h-[15%] max-h-[17%] min-w-[45%] max-w-[48%]"
                  classNameText="w-3/5"
                  title={projectExtension.label}
                  image={projectExtension.icon}
                  name="projectExtensions"
                  control={control}
                  multi={true}
                  value={projectExtension.id}
                />
              ))}
            </ScrollView>
          )}

          {error && <Text className="text-sm text-error  " tx={error} />}
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

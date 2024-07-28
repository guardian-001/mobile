import React from 'react';

import { StepButtons } from '@/modules/shared';
import {
  EmptyList,
  ErrorData,
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
    isFetchedAfterMount,
  } = useAdditionalInfo();
  return (
    <View className="flex-1 pt-4">
      {isError ? (
        <ErrorData message="Error Loading Data" />
      ) : (
        <View className="flex flex-1 justify-between">
          <View className="flex-1">
            {isLoading || ExtensionsData?.length === 0 ? (
              <EmptyList isLoading={isLoading || isFetchedAfterMount} />
            ) : (
              <View className="flex flex-1 flex-row flex-wrap gap-4 px-1">
                {ExtensionsData.map((cardData) => (
                  <ToggleCard
                    key={cardData.id}
                    className="flex flex-row-reverse !justify-end rounded-lg"
                    containerClassName="h-8 min-h-[15%] max-h-[17%] min-w-[45%] max-w-[47%]"
                    classNameText="w-3/5"
                    title={cardData.label}
                    image={cardData.icon}
                    name="projectExtensions"
                    control={control}
                    multi={true}
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

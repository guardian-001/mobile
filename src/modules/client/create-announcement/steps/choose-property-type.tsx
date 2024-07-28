import React from 'react';

import { StepButtons } from '@/modules/shared';
import {
  EmptyList,
  ErrorData,
  Text,
  ToggleCard,
  View,
} from '@/shared/components';

import { usePropertyType } from '../hooks';

export function ChoosePropertyType() {
  const {
    onRollBack,
    handleSubmit,
    control,
    error,
    onSubmit,
    PropertyData,
    isError,
    isLoading,
  } = usePropertyType();
  return (
    <View className="flex-1 pt-4">
      {isError ? (
        <ErrorData message="Error Loading Data" />
      ) : (
        <View className="flex flex-1 justify-between ">
          {isLoading || PropertyData?.length === 0 ? (
            <EmptyList isLoading={isLoading} />
          ) : (
            <View className="gap-4">
              {PropertyData?.map((cardData) => (
                <ToggleCard
                  key={cardData.id}
                  className="flex h-16 w-full flex-row-reverse justify-between rounded-lg pl-8 pr-0"
                  title={cardData.label}
                  image={cardData.icon}
                  name="propertyType"
                  control={control}
                  value={cardData.id}
                />
              ))}
              {error && (
                <Text
                  className="text-sm text-error dark:text-error"
                  tx={error}
                />
              )}
            </View>
          )}
          <StepButtons
            previous={{
              handlePreviousStep: onRollBack,
              label: 'common.retour',
            }}
            next={{
              handleSubmit: handleSubmit(onSubmit),
              label: 'common.suivant',
            }}
          />
        </View>
      )}
    </View>
  );
}

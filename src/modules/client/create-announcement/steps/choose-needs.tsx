import React from 'react';

import { useNeedsApi } from '@/api/client';
import { StepButtons } from '@/modules/shared';
import {
  EmptyList,
  ErrorData,
  Text,
  ToggleCard,
  View,
} from '@/shared/components';

import { useNeeds } from '../hooks';

export function ChooseNeeds() {
  const { onRollBack, handleSubmit, control, error, onSubmit, formData } =
    useNeeds();
  const {
    data: NeedsData,
    isError,
    isLoading,
  } = useNeedsApi({
    variables: { architectSpeciality: formData.architectSpeciality },
  });
  return (
    <View className="flex-1 pt-4">
      {isError ? (
        <ErrorData message="Error Loading Data" />
      ) : (
        <View className="flex flex-1 justify-between">
          <View className="flex-1">
            {isLoading || NeedsData?.length === 0 ? (
              <EmptyList isLoading={isLoading} />
            ) : (
              <View className="gap-4">
                {NeedsData?.map((cardData, index) => (
                  <ToggleCard
                    key={index}
                    className="flex h-16  w-full flex-row rounded-lg"
                    title={cardData.label}
                    image={cardData.icon}
                    name="needs"
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

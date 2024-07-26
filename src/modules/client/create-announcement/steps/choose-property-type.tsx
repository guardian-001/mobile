import React from 'react';

import { StepButtons } from '@/modules/shared';
import { Text, ToggleCard, View } from '@/shared/components';

import { PropertyData } from '../dump-data';
import { usePropertyType } from '../hooks';

export function ChoosePropertyType() {
  const { onHandleBack, handleSubmit, control, error, onSubmit } =
    usePropertyType();
  return (
    <View className="flex flex-1 justify-between pt-8">
      <View className="gap-4">
        {PropertyData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className="flex h-16 w-full flex-row-reverse justify-between rounded-lg pl-8 pr-0"
            title={cardData.label}
            svgComponent={cardData.icon}
            name="propertyType"
            control={control}
            value={cardData.id}
          />
        ))}
        {error && (
          <Text className="text-sm text-error dark:text-error" tx={error} />
        )}
      </View>
      <StepButtons
        previous={{ handlePreviousStep: onHandleBack, label: 'signup.retour' }}
        next={{
          handleSubmit: handleSubmit(onSubmit),
          label: 'signup.suivant',
        }}
      />
    </View>
  );
}

import React from 'react';

import { StepButtons } from '@/modules/shared';
import { Text, ToggleCard, View } from '@/shared/components';

import { NeedsData } from '../dump-data';
import { useNeeds } from '../hooks';

export function ChooseNeeds() {
  const { onHandleBack, handleSubmit, control, error, onSubmit } = useNeeds();
  return (
    <View className="flex flex-1 justify-between pt-4">
      <View className="gap-4">
        {NeedsData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className="flex h-16  w-full flex-row rounded-lg"
            title={cardData.label}
            svgComponent={cardData.icon}
            name="needs"
            control={control}
            multi={true}
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

import React from 'react';

import { StepButtons } from '@/modules/shared';
import { Text, ToggleCard, View } from '@/shared/components';

import { PreferredStyleData } from '../dump-data';
import { usePreferredStyle } from '../hooks';

export function ChoosePreferredStyle() {
  const { onHandleBack, handleSubmit, control, error, onSubmit } =
    usePreferredStyle();
  return (
    <View className="flex flex-1 justify-between pt-8">
      <View className=" gap-4">
        {PreferredStyleData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className="h-16 w-full !items-start rounded-lg"
            title={cardData.label}
            name="architecturalStyle"
            control={control}
            value={cardData.id}
          />
        ))}
      </View>
      {error && (
        <Text className="text-sm text-error dark:text-error" tx={error} />
      )}
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

import React from 'react';

import { StepButtons } from '@/modules/shared';
import { Text, ToggleCard, View } from '@/shared/components';

import { CategoryData } from '../dump-data';
import { useCategory } from '../hooks';

export function ChooseCategory() {
  const { onHandleBack, handleSubmit, control, error, onSubmit } =
    useCategory();

  return (
    <View className="flex flex-1 justify-between pt-8">
      <View className="flex flex-row flex-wrap gap-4">
        {CategoryData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className="w-full rounded-lg"
            containerClassName="min-h-[25%] min-w-[40%] max-w-[47%] max-h-[50%]"
            title={cardData.label}
            svgComponent={cardData.icon}
            name="projectCategory"
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

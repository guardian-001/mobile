import React from 'react';

import { StepButtons } from '@/modules/shared';
import { Text, ToggleCard, View } from '@/shared/components';

import { workTypeData } from '../dump-data';
import { useWorkType } from '../hooks/use-work-type';

export function ChooseWorkType() {
  const { onHandleBack, handleSubmit, control, error, onSubmit } =
    useWorkType();
  return (
    <View className="flex flex-1 justify-between pt-4">
      <View className="gap-4">
        {workTypeData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className="h-16 w-full !items-start rounded-lg"
            title={cardData.header}
            description={cardData.description}
            name="workType"
            control={control}
            value={cardData.id}
          />
        ))}
      </View>
      {error && (
        <Text className="text-sm text-error dark:text-error" tx={error} />
      )}
      <StepButtons
        previous={{ handlePreviousStep: onHandleBack, label: 'common.retour' }}
        next={{ handleSubmit: handleSubmit(onSubmit), label: 'common.suivant' }}
      />
    </View>
  );
}

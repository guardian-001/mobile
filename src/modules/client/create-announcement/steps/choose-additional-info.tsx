import React from 'react';

import { StepButtons } from '@/modules/shared';
import { Text, ToggleCard, View } from '@/shared/components';

import { ExtensionsData } from '../dump-data';
import { useAdditionalInfo } from '../hooks';

export function ChooseAdditionalInfo() {
  const { onRollBack, handleSubmit, control, error, onSubmit } =
    useAdditionalInfo();
  return (
    <View className="flex flex-1 justify-between pt-4">
      <View className="flex flex-1  flex-wrap gap-4 px-1">
        {ExtensionsData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className="flex flex-row-reverse !justify-end rounded-lg"
            containerClassName="h-8 min-h-[15%] max-h-[17%] min-w-[45%] max-w-[47%]"
            classNameText="w-3/5"
            title={cardData.label}
            svgComponent={cardData.icon}
            name="projectExtensions"
            control={control}
            multi={true}
            value={cardData.id}
          />
        ))}
      </View>
      {error && (
        <Text className="text-sm text-error dark:text-error" tx={error} />
      )}
      <StepButtons
        previous={{ handlePreviousStep: onRollBack, label: 'signup.retour' }}
        next={{
          handleSubmit: handleSubmit(onSubmit),
          label: 'signup.suivant',
        }}
      />
    </View>
  );
}

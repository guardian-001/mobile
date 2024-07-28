import React from 'react';

import { translate } from '@/core';
import { StepperButton } from '@/modules/shared';
import { Text, ToggleCard, View } from '@/shared/components';

import { toggleCardData } from '../dump-data';
import { useSpeciality } from '../hooks';

export function ChooseSpeciality() {
  const { handleSubmit, control, error, onSubmit } = useSpeciality();
  return (
    <View className="flex flex-1 justify-between pt-4">
      <View className="h-[85%] items-center gap-4">
        {toggleCardData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className=" h-40 w-64 rounded-2xl"
            title={cardData.label}
            svgComponent={cardData.icon}
            name="architectSpeciality"
            control={control}
            value={cardData.id}
            classNameText="my-3"
          />
        ))}
      </View>
      {error && (
        <Text className="text-sm text-error dark:text-error" tx={error} />
      )}
      <StepperButton
        onPressHandler={handleSubmit(onSubmit)}
        label={translate('common.suivant')}
      />
    </View>
  );
}

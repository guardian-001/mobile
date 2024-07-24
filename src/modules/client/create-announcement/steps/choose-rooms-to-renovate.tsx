import React from 'react';

import { StepButtons } from '@/modules/shared';
import { Counter, View } from '@/shared/components';

import { RenovateData } from '../dump-data';
import { useRoomsToRenovate } from '../hooks';

export function ChooseRoomsToRenovate() {
  const { onHandleBack, handleSubmit, control, onSubmit } =
    useRoomsToRenovate();
  return (
    <View className="flex flex-1 items-center justify-between pt-8">
      <View className="gap-4">
        {RenovateData.map((item, index) => (
          <Counter
            key={index}
            title={item.label}
            svgComponent={item.icon}
            name="piecesRenovate"
            control={control}
            id={item.id}
          />
        ))}
      </View>
      <StepButtons
        previous={{ handlePreviousStep: onHandleBack, label: 'signup.retour' }}
        next={{ handleSubmit: handleSubmit(onSubmit), label: 'signup.suivant' }}
      />
    </View>
  );
}

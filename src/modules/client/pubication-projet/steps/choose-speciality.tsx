import React from 'react';

import { translate } from '@/core';
import { StepperButton } from '@/modules/shared';
import { View } from '@/shared/components';

type SpecialityFormProps = {
  handleNextStep?: () => void;
};

export function ChooseSpeciality({ handleNextStep }: SpecialityFormProps) {
  return (
    <View className="flex flex-1 items-center justify-between pt-8">
      <StepperButton
        onPressHandler={handleNextStep}
        label={translate('signup.suivant')}
      />
    </View>
  );
}

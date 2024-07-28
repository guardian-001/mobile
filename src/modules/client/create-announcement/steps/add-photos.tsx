import React from 'react';

import { translate } from '@/core';
import { StepperButton } from '@/modules/shared';
import { View } from '@/shared/components';
import { useFormStepper } from '@/shared/providers';
import type { AnnouncementType } from '@/types/announcement';

export function AddPhotos() {
  const { onHandleBack, onHandleNext } = useFormStepper<AnnouncementType>();
  return (
    <View className="flex flex-1 items-center justify-between pt-8">
      <View className="h-3/4" />
      <View className="flex flex-row">
        <StepperButton
          width="w-[45%]"
          onPressHandler={onHandleBack}
          label={translate('common.retour')}
        />
        <StepperButton
          width="w-[45%]"
          onPressHandler={onHandleNext}
          label={translate('common.suivant')}
        />
      </View>
    </View>
  );
}

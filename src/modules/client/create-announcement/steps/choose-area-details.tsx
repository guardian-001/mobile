import React from 'react';

import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import {
  Cities,
  ControlledInput,
  SizeCategories,
  TagGroup,
  Text,
  View,
} from '@/shared/components';

import { useAreaDetails } from '../hooks/use-area-details.';
export function ChooseAreaDetails() {
  const { onHandleBack, handleSubmit, control, onSubmit } = useAreaDetails();
  return (
    <View className="flex flex-1 justify-between pt-4">
      <View className="gap-4">
        <ControlledInput
          control={control}
          name="address"
          label={translate('announcement.addressLabel')}
          placeholder={translate('announcement.addressPlaceholder')}
        />
        <TagGroup
          name="city"
          control={control}
          tags={Cities}
          label="announcement.cityLabel"
        />
        <View className="my-1">
          <Text
            tx="announcement.areaDetailsTitle"
            className="text-xl font-bold"
          />
          <Text
            tx="announcement.areaInformationTitle"
            className="text-base text-description"
          />
        </View>
        <TagGroup
          name="terrainSurface"
          control={control}
          tags={SizeCategories}
          label="announcement.totalLandAreaLabel"
        />
        <TagGroup
          name="workSurface"
          control={control}
          tags={SizeCategories}
          label="announcement.workAreaLabel"
        />
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

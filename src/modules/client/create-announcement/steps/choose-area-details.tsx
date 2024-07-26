import React from 'react';

import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import { ControlledInput, TagGroup, Text, View } from '@/shared/components';
import { VALID_CITIES, VALID_WORK_SURFACES } from '@/shared/constants';

import { useAreaDetails } from '../hooks/use-area-details.';
export function ChooseAreaDetails() {
  const {
    onHandleBack,
    handleSubmit,
    control,
    onSubmit,
    errorCity,
    errorTerrainSurface,
    errorWorkSurface,
  } = useAreaDetails();
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
          tags={[...VALID_CITIES]}
          label="announcement.cityLabel"
          error={errorCity}
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
          tags={[...VALID_WORK_SURFACES]}
          label="announcement.totalLandAreaLabel"
          error={errorTerrainSurface}
        />
        <TagGroup
          name="workSurface"
          control={control}
          tags={[...VALID_WORK_SURFACES]}
          label="announcement.workAreaLabel"
          error={errorWorkSurface}
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

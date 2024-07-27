import React from 'react';

import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import { ControlledInput, TagGroup, Text, View } from '@/shared/components';

import { useAreaDetails } from '../hooks/use-area-details.';
export function ChooseAreaDetails() {
  const {
    onRollBack,
    handleSubmit,
    control,
    onSubmit,
    errorCity,
    errorTerrainSurface,
    errorWorkSurface,
    cities,
    terrainSurfaces,
    workSurfaces,
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
          tags={cities}
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
          tags={terrainSurfaces}
          label="announcement.totalLandAreaLabel"
          error={errorTerrainSurface}
        />
        <TagGroup
          name="workSurface"
          control={control}
          tags={workSurfaces}
          label="announcement.workAreaLabel"
          error={errorWorkSurface}
        />
      </View>
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

import React from 'react';

import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import {
  ControlledInput,
  CounterSimple,
  EmptyList,
  ErrorData,
  TagGroup,
  Text,
  View,
} from '@/shared/components';

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
    formData,
    isError,
    isLoading,
  } = useAreaDetails();
  return (
    <View className="flex-1 pt-4">
      {isError ? (
        <ErrorData message="Error Loading Data" />
      ) : (
        <View className="flex flex-1 justify-between">
          {isLoading ? (
            <EmptyList isLoading={isLoading} />
          ) : (
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
              {formData?.newConstruction && (
                <TagGroup
                  name="terrainSurface"
                  control={control}
                  tags={terrainSurfaces}
                  label="announcement.totalLandAreaLabel"
                  error={errorTerrainSurface}
                />
              )}
              <TagGroup
                name="workSurface"
                control={control}
                tags={workSurfaces}
                label="announcement.workAreaLabel"
                error={errorWorkSurface}
              />
              {formData?.newConstruction && formData.propertyType !== 4 && (
                <CounterSimple
                  title={translate('announcement.nbFloorLabel')}
                  name="numberFloors"
                  control={control}
                />
              )}
            </View>
          )}
          <StepButtons
            previous={{
              handlePreviousStep: onRollBack,
              label: 'common.back',
            }}
            next={{
              handleSubmit: handleSubmit(onSubmit),
              label: 'common.next',
            }}
          />
        </View>
      )}
    </View>
  );
}

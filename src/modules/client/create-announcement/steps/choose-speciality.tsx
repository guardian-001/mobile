import React from 'react';

import { useStylesApi } from '@/api/client';
import { translate } from '@/core';
import { StepperButton } from '@/modules/shared';
import {
  EmptyList,
  ErrorData,
  Text,
  ToggleCard,
  View,
} from '@/shared/components';

import { useSpeciality } from '../hooks';

export function ChooseSpeciality() {
  const { handleSubmit, control, error, onSubmit } = useSpeciality();
  const { data: SpecialityData, isError, isLoading } = useStylesApi();
  return (
    <View className="flex-1 pt-4">
      {isError ? (
        <ErrorData message="Error Loading Data" />
      ) : (
        <View className="flex flex-1 justify-between">
          {isLoading || SpecialityData?.length === 0 ? (
            <EmptyList isLoading={isLoading} />
          ) : (
            <View className="h-[85%] items-center gap-4">
              {SpecialityData?.map((cardData, index) => (
                <ToggleCard
                  key={index}
                  className="h-56 w-60 rounded-2xl"
                  title={cardData.label}
                  image={cardData.icon}
                  name="architectSpeciality"
                  control={control}
                  value={cardData.id}
                  classNameText="my-3"
                />
              ))}
            </View>
          )}
          {error && (
            <Text className="text-sm text-error dark:text-error" tx={error} />
          )}
          <StepperButton
            onPressHandler={handleSubmit(onSubmit)}
            label={translate('signup.suivant')}
          />
        </View>
      )}
    </View>
  );
}

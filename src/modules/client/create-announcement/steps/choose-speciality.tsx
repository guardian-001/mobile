import React from 'react';

import type { resultType } from '@/api/client/announcements/types';
import { translate } from '@/core';
import { StepperButton } from '@/modules/shared';
import {
  EmptyList,
  ErrorData,
  ScrollView,
  Text,
  ToggleCard,
  View,
} from '@/shared/components';

import { useSpeciality } from '../hooks';

export function ChooseSpeciality() {
  const {
    handleSubmit,
    control,
    error,
    onSubmit,
    SpecialityData,
    isError,
    isLoading,
    isSuccess,
  } = useSpeciality();
  return (
    <View className="flex-1 pt-4">
      {isError && <ErrorData message="Error Loading Data" />}
      <View className="flex flex-1 justify-between">
        {(isLoading || SpecialityData?.length === 0) && (
          <EmptyList isLoading={isLoading} />
        )}
        {isSuccess && (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerClassName="gap-4"
          >
            {SpecialityData?.map((speciality: resultType) => (
              <ToggleCard
                key={speciality.id}
                className="h-56 w-60 rounded-2xl"
                title={speciality.label}
                image={speciality.icon}
                name="architectSpeciality"
                control={control}
                value={speciality.id}
                classNameText="my-3"
              />
            ))}
          </ScrollView>
        )}
        {error && (
          <Text className="text-sm text-error dark:text-error" tx={error} />
        )}
        <StepperButton
          onPressHandler={handleSubmit(onSubmit)}
          label={translate('common.next')}
        />
      </View>
    </View>
  );
}

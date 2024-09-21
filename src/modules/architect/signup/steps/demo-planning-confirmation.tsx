import React from 'react';

import { Clock } from '@/assets/icons/archimatch';
import { translate } from '@/core';
import { StepperButton } from '@/modules/shared';
import { HeaderTitle, Text, View } from '@/shared/components';
import { add30Minutes, formatDate } from '@/shared/utils';

import { useDemoConfirmation } from '../shared/hooks';

export function DemoPlanningConfirmation() {
  const { formData, timezone, handleConfirmationStep, onHandleBack } =
    useDemoConfirmation();

  return (
    <View className="mb-5 flex h-full flex-1 items-center justify-between gap-16  ">
      <HeaderTitle text="signup.headerTitle" type="custom" />
      <View className="mt-[12vh]">
        <Text
          tx={'signupStepDemoPlanningConfirmation.title'}
          className="mb-2 text-center text-2xl font-extrabold"
        />
        <Text
          tx={'signupStepDemoPlanningConfirmation.description'}
          className="max-w-xs text-center text-sm text-description"
        />
      </View>

      <View className="mb-5 flex h-full flex-1 items-center justify-between gap-16  ">
        <View className="flex h-fit w-full items-center  justify-between gap-5">
          <Clock />
          <View className="flex h-fit w-4/5 flex-row items-center justify-between rounded-xl bg-white p-4 shadow-md shadow-color-shadow">
            <View className="w-4/5  flex-1  items-start justify-between">
              <Text className="font-bold text-description">
                {translate('labels.date')}
              </Text>
              <Text className="font-bold text-description">
                {formatDate(formData.date)}
              </Text>
            </View>

            <View className="w-4/5   flex-1  items-start justify-between">
              <Text className="font-bold text-description">
                {translate('labels.time')}
              </Text>
              <Text className="max-w-sm  ">
                <Text className="flex-row font-bold text-primary-txt ">
                  {`${formData.timeSlot} - ${add30Minutes(formData.timeSlot)} `}
                </Text>

                <Text className="space-y-4 font-light text-description">
                  ({timezone})
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View className=" flex w-full items-center">
          <View className="my-2 flex flex-row justify-center gap-2">
            <StepperButton
              width="w-[45%]"
              alternativeBg="bg-secondary-btn"
              alternativeTextStyle="color-primary-txt"
              label={translate('common.back')}
              onPressHandler={onHandleBack}
            />

            <StepperButton
              width="w-[45%]"
              onPressHandler={handleConfirmationStep}
              label={translate('signupStepDemoPlanningConfirmation.confirmBtn')}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

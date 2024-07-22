import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { ArrowLeft, ArrowRight, Globe } from '@/assets/icons';
import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import { DemoFormSchema } from '@/shared/validations';
import colors from '@/theme/colors';
import type { SignupFormDataType } from '@/types';

import { DAYS } from '../constants/constants';
import { useCalendar, useCustomForm, useTimezone } from '../hooks';
import { useFormStepper } from '../providers/use-form-stepper-provider';
import { capitalizeFirstLetter } from '../utils';
import { CalendarDaysList } from './';
import { RenderTimeSlots } from './time-slots';
type DemoPlanningFormType = Pick<SignupFormDataType, 'date' | 'timeSlot'>;
export const Calendar = () => {
  const { currentMonth, currentYear, handlePreviousMonth, handleNextMonth } =
    useCalendar();
  const [formattedTimezone] = useTimezone();
  const { selectedDate } = useCalendar();
  const { formData, setFormData, onHandleNext, onHandleBack } =
    useFormStepper<SignupFormDataType>();
  const { handleSubmit, errors, control } = useCustomForm(DemoFormSchema, {
    date: formData?.date,
    timeSlot: formData?.timeSlot,
  });
  const onSubmit = (data: DemoPlanningFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };
  return (
    <>
      <View className="my-5 flex h-fit w-4/5 rounded-3xl bg-white px-3 py-5 shadow-md">
        <View className="flex-1 items-center justify-center bg-white">
          <View className="px-4">
            <View className="mb-4 flex-row items-start justify-between py-2">
              <TouchableOpacity
                className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-400 p-2"
                onPress={handlePreviousMonth}
              >
                <ArrowLeft color={colors.gray[600]} />
              </TouchableOpacity>
              <Text className="text-sm font-bold text-primary-txt">
                {capitalizeFirstLetter(
                  new Date(currentYear, currentMonth, 1).toLocaleString(
                    'default',
                    {
                      month: 'long',
                      year: 'numeric',
                    }
                  )
                )}
              </Text>
              <TouchableOpacity
                className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-400 p-2"
                onPress={handleNextMonth}
              >
                <ArrowRight color={colors.gray[600]} />
              </TouchableOpacity>
            </View>
            <View className="mb-2 flex-row items-center justify-between ">
              {DAYS.map((day, index) => (
                <Text
                  key={`day-header-${index}`}
                  className="mr-1 w-10 text-center font-medium text-primary-txt"
                >
                  {day}
                </Text>
              ))}
            </View>
            <CalendarDaysList name="date" control={control} />
          </View>
          <View className="mt-4 items-start">
            <Text className="mb-2 ml-2 text-xs font-semibold text-primary-txt">
              {selectedDate.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })}
            </Text>
            <View className="flex-row flex-wrap justify-center">
              <RenderTimeSlots name="timeSlot" control={control} />
            </View>
            <View>
              <Text className="ml-2 mt-2 text-start text-xs font-bold text-primary-txt">
                {translate('signupStepDemoPlanning.timezone')}
              </Text>
              <View className="ml-2 flex flex-row items-center gap-2">
                <Globe />
                <Text className="text-start text-xs text-primary-txt">
                  {formattedTimezone}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {errors?.date && <Text>{errors.date.message}</Text>}
      {errors?.timeSlot && <Text>{errors.timeSlot.message}</Text>}
      <StepButtons
        previous={{ handlePreviousStep: onHandleBack, label: 'signup.retour' }}
        next={{ handleSubmit: handleSubmit(onSubmit), label: 'signup.suivant' }}
      />
    </>
  );
};

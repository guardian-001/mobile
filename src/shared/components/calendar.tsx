import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { ArrowLeft, ArrowRight } from '@/assets/icons';
import colors from '@/theme/colors';
import { DemoFormSchema } from '@/validations';

import { DAYS } from '../constants/constants';
import { useCalendar, useCustomForm } from '../hooks';
import { useFormStepper } from '../providers/use-signup-stepper-provider';
import { capitalizeFirstLetter, formatDateBackend } from '../utils';
import { CalendarDaysList } from './';
import { RenderTimeSlots } from './time-slots';

type CalendarProps = {
  errors: any;
};
type PlanDemoType = {
  name: string;
  data: Date | string;
};
export const Calendar = ({ errors }: CalendarProps) => {
  const {
    selectedDate,
    selectedTime,
    currentMonth,
    currentYear,
    handleDatePress,
    handleTimePress,
    handlePreviousMonth,
    handleNextMonth,
  } = useCalendar();
  // const [formattedTimezone] = useTimezone();
  const { formData, setFormData } = useFormStepper();
  const { control } = useCustomForm(DemoFormSchema, {
    date: formData?.date,
    timeSlot: formData?.timeSlot,
  });

  const handleData = ({ name, data }: PlanDemoType) => {
    console.log('name: ', name);
    console.log('data: ', data);
    setFormData((prev: any) => ({
      ...prev,
      [name]: data,
    }));
  };

  const onDatePress = (date: Date) => {
    handleData({ name: 'date', data: date });
    setFormData((prev: any) => ({
      ...prev,
      date: formatDateBackend(date),
    }));
    handleDatePress(date);
  };

  const onTimePress = (time: string) => {
    handleData({ name: 'timeSlot', data: time });
    setFormData((prev: any) => ({
      ...prev,
      timeSlot: time,
    }));
    handleTimePress(time);
  };

  return (
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
              new Date(currentYear, currentMonth, 1).toLocaleString('default', {
                month: 'long',
                year: 'numeric',
              })
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
        <CalendarDaysList
          name="date"
          control={control}
          currentYear={currentYear}
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          handleDatePress={onDatePress}
          handlePreviousMonth={handlePreviousMonth}
          handleNextMonth={handleNextMonth}
          errors={errors}
        />
      </View>
      <View className="mt-4 items-start">
        {/* <Text className="mb-2 ml-2 text-xs font-semibold text-primary-txt">
          {selectedDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
        </Text> */}
        <View className="flex-row flex-wrap justify-center">
          <RenderTimeSlots
            name="timeSlot"
            control={control}
            handleTimePress={onTimePress}
            selectedTime={selectedTime}
          />
        </View>
        {/* <View>
          <Text className="ml-2 mt-2 text-start text-xs font-bold text-primary-txt">
            {translate('signupStepDemoPlanning.timezone')}
          </Text>
          <View className="ml-2 flex flex-row items-center gap-2">
            <Globe />
            <Text className="text-start text-xs text-primary-txt">
              {formattedTimezone}
            </Text>
          </View>
        </View> */}
      </View>
    </View>
  );
};

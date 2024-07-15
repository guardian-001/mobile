import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { ArrowLeft, ArrowRight, Globe } from '@/assets/icons';
import { translate } from '@/core';
import colors from '@/theme/colors';

import { useCalendar, useTimezone } from '../hooks';
import { capitalizeFirstLetter } from '../utils';
import { days } from './';
import { renderCalendarDays } from './render-calendar-days';
import { RenderTimeSlots } from './time-slots';

type CalendarProps = {
  onDateSelect: (date: Date) => void;
  onTimeSelect: (time: string) => void;
};

export const Calendar: React.FC<CalendarProps> = ({
  onDateSelect,
  onTimeSelect,
}) => {
  const {
    selectedDate,
    currentMonth,
    currentYear,
    handleDatePress,
    handlePreviousMonth,
    handleNextMonth,
  } = useCalendar();

  const [formattedTimezone] = useTimezone();

  const onDatePress = (date: Date) => {
    handleDatePress(date);
    onDateSelect(date);
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
          {days.map((day, index) => (
            <Text
              key={`day-header-${index}`}
              className="mr-1 w-10 text-center font-medium text-primary-txt"
            >
              {day}
            </Text>
          ))}
        </View>
        {/* <CalendarView
          currentYear={currentYear}
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          handleDatePress={onDatePress}
        /> */}
        <View className="flex-col flex-wrap">
          {renderCalendarDays({
            currentYear,
            currentMonth,
            selectedDate,
            handleDatePress: onDatePress,
          }).map((week) => {
            return (
              <View
                key={week[0]?.toString()}
                className="mb-2 flex-row justify-between"
              >
                {week}
              </View>
            );
          })}
        </View>
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
          <RenderTimeSlots onTimePress={onTimeSelect} />
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
  );
};

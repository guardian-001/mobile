import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface CalendarDayItemProps {
  date: Date;
  isSelected: boolean;
  isToday: boolean;
  isPrevious?: boolean;
  isNext?: boolean;
  handleDatePress: (date: Date) => void;
  isDisabled?: boolean;
}

export const CalendarDayItem = ({
  date,
  isSelected,
  isToday,
  isPrevious = false,
  isNext = false,
  handleDatePress,
  isDisabled = false,
}: CalendarDayItemProps) => {
  return (
    <TouchableOpacity
      className={`mr-1 h-10 w-10 items-center justify-center rounded-full ${
        isPrevious || isNext ? 'rounded-full bg-zinc-200' : ''
      } ${
        isSelected
          ? 'bg-primary'
          : isToday
          ? 'border-2 border-primary bg-white'
          : 'bg-white'
      }`}
      onPress={() => handleDatePress(date)}
      disabled={isDisabled}
    >
      <Text
        className={`font-lato text-sm   ${
          isDisabled || isPrevious || isNext
            ? 'text-gray-500'
            : isSelected
            ? 'font-bold text-white'
            : 'font-bold text-primary-txt'
        }`}
      >
        {date.getDate()}
      </Text>
    </TouchableOpacity>
  );
};

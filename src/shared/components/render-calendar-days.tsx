import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { splitList } from '../utils';

interface RenderCalendarDaysProps {
  currentYear: number;
  currentMonth: number;
  selectedDate: Date;
  handleDatePress: (date: Date) => void;
}

export const renderCalendarDays = ({
  currentYear,
  currentMonth,
  selectedDate,
  handleDatePress,
}: RenderCalendarDaysProps): JSX.Element[][] => {
  const daysInCurrentMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();
  const firstDayOfCurrentMonth = new Date(
    currentYear,
    currentMonth,
    1
  ).getDay();
  const lastDayOfCurrentMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDay();
  const calendarDays: JSX.Element[] = [];
  const daysFromPreviousMonth =
    firstDayOfCurrentMonth === 0 ? 6 : firstDayOfCurrentMonth - 1;

  Array.from({ length: daysFromPreviousMonth }).forEach((_, i) => {
    const date = new Date(
      currentYear,
      currentMonth,
      1 - daysFromPreviousMonth + i
    );
    calendarDays.push(
      <TouchableOpacity
        className="mr-1 h-10 w-10 items-center justify-center rounded-full bg-gray-200"
        key={`day-prev-${i}`}
        onPress={() => handleDatePress(date)}
        disabled={date.getMonth() < new Date().getMonth()}
      >
        <Text className="font-lato text-sm text-gray-500">
          {date.getDate()}
        </Text>
      </TouchableOpacity>
    );
  });

  Array.from({ length: daysInCurrentMonth }).forEach((_, i) => {
    const date = new Date(currentYear, currentMonth, i + 1);
    calendarDays.push(
      <TouchableOpacity
        className={`mr-1 h-10 w-10 items-center justify-center rounded-full ${
          date.getDate() === selectedDate.getDate() &&
          date.getMonth() === selectedDate.getMonth() &&
          date.getFullYear() === selectedDate.getFullYear()
            ? 'bg-primary'
            : new Date().getDate() === date.getDate() &&
              new Date().getMonth() === date.getMonth() &&
              new Date().getFullYear() === date.getFullYear()
            ? 'border-2 border-primary bg-white'
            : 'bg-white'
        }`}
        key={`day-${i + 1}`}
        onPress={() => handleDatePress(date)}
        disabled={date.getDate() < new Date().getDate()}
      >
        <Text
          className={`font-lato text-sm ${
            date.getDate() < new Date().getDate() &&
            new Date().getMonth() === date.getMonth() &&
            new Date().getFullYear() === date.getFullYear()
              ? 'text-gray-500'
              : date.getDate() === selectedDate.getDate() &&
                date.getMonth() === selectedDate.getMonth() &&
                date.getFullYear() === selectedDate.getFullYear()
              ? 'font-bold text-white'
              : 'font-bold text-primary-txt'
          }`}
        >
          {i + 1}
        </Text>
      </TouchableOpacity>
    );
  });

  const daysFromNextMonth = (7 - lastDayOfCurrentMonth) % 7;
  Array.from({ length: daysFromNextMonth }).forEach((_, i) => {
    const date = new Date(
      currentMonth === 11 ? currentYear + 1 : currentYear,
      currentMonth === 11 ? 0 : currentMonth + 1,
      i + 1
    );
    calendarDays.push(
      <TouchableOpacity
        className={`mr-1 h-10 w-10 items-center justify-center rounded-full ${
          date.getDate() === selectedDate.getDate() &&
          date.getMonth() === selectedDate.getMonth() &&
          date.getFullYear() === selectedDate.getFullYear()
            ? 'bg-primary'
            : 'bg-gray-200'
        }`}
        key={`day-next-${daysInCurrentMonth + i + 1}`}
        onPress={() => handleDatePress(date)}
      >
        <Text
          className={`font-lato text-sm ${
            date.getDate() === selectedDate.getDate() &&
            date.getMonth() === selectedDate.getMonth() &&
            date.getFullYear() === selectedDate.getFullYear()
              ? 'font-bold text-white'
              : 'text-gray-500'
          }`}
        >
          {date.getDate()}
        </Text>
      </TouchableOpacity>
    );
  });

  return splitList(calendarDays, 7);
};

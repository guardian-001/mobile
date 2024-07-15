import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { splitList } from '../utils';

export const renderCalendarDays = ({
  currentYear,
  currentMonth,
  selectedDate,
  handleDatePress,
}: any) => {
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
  const calendarDays = [];
  const daysFromPreviousMonth =
    firstDayOfCurrentMonth === 0 ? 6 : firstDayOfCurrentMonth - 1;
  for (let i = 0; i < daysFromPreviousMonth; i++) {
    const date = new Date(
      currentYear,
      currentMonth,
      1 - daysFromPreviousMonth + i
    );
    calendarDays.push(
      <TouchableOpacity
        className={`mr-1 h-10 w-10 items-center justify-center rounded-full bg-gray-200`}
        key={`day-${i}`}
        onPress={() => handleDatePress(date)}
        disabled={date.getMonth() < new Date().getMonth()}
      >
        <Text className={`font-lato text-sm text-gray-500`}>
          {date.getDate()}
        </Text>
      </TouchableOpacity>
    );
  }
  for (let i = 1; i <= daysInCurrentMonth; i++) {
    const date = new Date(currentYear, currentMonth, i);
    calendarDays.push(
      <TouchableOpacity
        className={`mr-1 h-10 w-10 items-center justify-center rounded-full  ${
          date.getDate() === selectedDate.getDate() &&
          date.getMonth() === selectedDate.getMonth() &&
          date.getFullYear() === selectedDate.getFullYear()
            ? 'bg-primary'
            : new Date().getDate() === date.getDate() &&
              new Date().getMonth() === date.getMonth() &&
              new Date().getFullYear() === date.getFullYear()
            ? 'border-2 border-primary bg-white '
            : 'bg-white'
        }`}
        key={`day-${i}`}
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
          {i}
        </Text>
      </TouchableOpacity>
    );
  }
  const daysFromNextMonth = (7 - lastDayOfCurrentMonth) % 7;
  for (let i = 1; i <= daysFromNextMonth; i++) {
    const date = new Date(
      currentMonth === 11 ? currentYear + 1 : currentYear,
      currentMonth === 11 ? 0 : currentMonth + 1,
      i
    );
    calendarDays.push(
      <TouchableOpacity
        className={`mr-1 h-10 w-10 items-center justify-center rounded-full  ${
          date.getDate() === selectedDate.getDate() &&
          date.getMonth() === selectedDate.getMonth() &&
          date.getFullYear() === selectedDate.getFullYear()
            ? 'bg-primary'
            : 'bg-gray-200'
        }`}
        key={`day-${daysInCurrentMonth + i}`}
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
  }
  return splitList(calendarDays, 7);
};

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export const renderCalendarDays = ({
  currentYear,
  currentMonth,
  selectedDate,
  handleDatePress,
}: any) => {
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const calendarDays = [];

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentYear, currentMonth, i);
    calendarDays.push(
      <TouchableOpacity
        className={`mr-1 h-10 w-10 items-center justify-center rounded-full  ${
          date.getDate() === selectedDate.getDate() &&
          date.getMonth() === selectedDate.getMonth() &&
          date.getFullYear() === selectedDate.getFullYear()
            ? 'bg-primary'
            : new Date().getDate() === date.getDate() &&
              date.getMonth() === selectedDate.getMonth() &&
              date.getFullYear() === selectedDate.getFullYear()
            ? 'border-2 border-primary bg-white '
            : 'bg-white'
        }`}
        key={`day-${i}`}
        onPress={() => handleDatePress(date)}
        disabled={date.getDate() < new Date().getDate()}
      >
        <Text
          className={`font-lato text-sm ${
            date.getDate() < new Date().getDate()
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

  return splitList(calendarDays, 7);
};

function splitList(arr: any, chunkSize: number) {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export const renderCalendarDays = ({
  currentYear,
  currentMonth,
  selectedDate,
  handleDatePress,
}: any) => {
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const calendarDays = [];

  // Add empty days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(
      <View className={`m-[0.5px] h-9 w-9 bg-black`} key={`empty-${i}`} />
    );
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentYear, currentMonth, i);
    calendarDays.push(
      <TouchableOpacity
        className={`m-[0.5px] h-9 w-9 items-center justify-center bg-primary-txt ${
          date.getDate() === selectedDate.getDate() &&
          date.getMonth() === selectedDate.getMonth() &&
          date.getFullYear() === selectedDate.getFullYear()
            ? 'bg-gray-300'
            : ''
        }`}
        key={`day-${i}`}
        onPress={() => handleDatePress(date)}
      >
        <Text>{i}</Text>
      </TouchableOpacity>
    );
  }

  // Add empty days after the last day of the month
  const remainingDays = (7 - ((daysInMonth + firstDay) % 7)) % 7;
  for (let i = 0; i <= remainingDays; i++) {
    calendarDays.push(
      <View
        className={`m-[0.5px] h-9 w-9 bg-black`}
        key={`empty-${calendarDays.length}`}
      />
    );
  }

  console.log(calendarDays);
  return calendarDays;
};

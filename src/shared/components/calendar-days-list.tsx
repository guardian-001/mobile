import React from 'react';

import { splitList } from '../utils';
import { CalendarDayItem } from './';

interface CalendarDaysListProps {
  currentYear: number;
  currentMonth: number;
  selectedDate: Date;
  handleDatePress: (date: Date) => void;
}

export const CalendarDaysList = ({
  currentYear,
  currentMonth,
  selectedDate,
  handleDatePress,
}: CalendarDaysListProps) => {
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
  const currentDate = new Date();
  for (let i = 0; i < daysFromPreviousMonth; i++) {
    const date = new Date(
      currentYear,
      currentMonth,
      1 - daysFromPreviousMonth + i
    );
    calendarDays.push(
      <CalendarDayItem
        key={`day-${i}`}
        date={date}
        isPrevious={true}
        isSelected={
          date.getDate() === selectedDate.getDate() &&
          date.getMonth() === selectedDate.getMonth() &&
          date.getFullYear() === selectedDate.getFullYear()
        }
        isToday={
          date.getDate() === currentDate.getDate() &&
          date.getMonth() === currentDate.getMonth() &&
          date.getFullYear() === currentDate.getFullYear()
        }
        handleDatePress={handleDatePress}
        isDisabled={date.getMonth() < currentDate.getMonth()}
      />
    );
  }
  for (let i = 1; i <= daysInCurrentMonth; i++) {
    const date = new Date(currentYear, currentMonth, i);
    calendarDays.push(
      <CalendarDayItem
        key={`day-${i}`}
        date={date}
        isSelected={
          date.getDate() === selectedDate.getDate() &&
          date.getMonth() === selectedDate.getMonth() &&
          date.getFullYear() === selectedDate.getFullYear()
        }
        isToday={
          date.getDate() === currentDate.getDate() &&
          date.getMonth() === currentDate.getMonth() &&
          date.getFullYear() === currentDate.getFullYear()
        }
        handleDatePress={handleDatePress}
        isDisabled={date.getDate() < currentDate.getDate()}
      />
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
      <CalendarDayItem
        key={`day-${daysInCurrentMonth + i}`}
        date={date}
        isNext={true}
        isSelected={
          date.getDate() === selectedDate.getDate() &&
          date.getMonth() === selectedDate.getMonth() &&
          date.getFullYear() === selectedDate.getFullYear()
        }
        isToday={false}
        handleDatePress={handleDatePress}
      />
    );
  }
  return splitList(calendarDays, 7);
  // return (
  //   <View className="flex-col flex-wrap">
  //     {splitList(calendarDays, 7).map((row, index) => (
  //       <View key={`row-${index}`} className="mb-2 flex-row justify-between">
  //         {row}
  //       </View>
  //     ))}
  //   </View>
  // );
};

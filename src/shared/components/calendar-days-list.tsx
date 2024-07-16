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
  const calendarDays: JSX.Element[] = [];
  const daysFromPreviousMonth =
    firstDayOfCurrentMonth === 0 ? 6 : firstDayOfCurrentMonth - 1;
  const currentDate = new Date();

  Array.from({ length: daysFromPreviousMonth }).forEach((_, i) => {
    const date = new Date(
      currentYear,
      currentMonth,
      1 - daysFromPreviousMonth + i
    );
    calendarDays.push(
      <CalendarDayItem
        key={`day-prev-${i}`}
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
  });

  Array.from({ length: daysInCurrentMonth }).forEach((_, i) => {
    const date = new Date(currentYear, currentMonth, i + 1);
    calendarDays.push(
      <CalendarDayItem
        key={`day-${i + 1}`}
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
  });
  const daysFromNextMonth = (7 - lastDayOfCurrentMonth) % 7;

  Array.from({ length: daysFromNextMonth }).forEach((_, i) => {
    const date = new Date(
      currentMonth === 11 ? currentYear + 1 : currentYear,
      currentMonth === 11 ? 0 : currentMonth + 1,
      i + 1
    );
    calendarDays.push(
      <CalendarDayItem
        key={`day-next-${i + 1}`}
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
  });

  return splitList(calendarDays, 7);
};

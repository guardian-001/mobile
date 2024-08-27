import React, { useState } from 'react';
import type { Control, RegisterOptions } from 'react-hook-form';
import { type FieldValues, type Path, useController } from 'react-hook-form';
import { View } from 'react-native';

import { useCalendar } from '../providers/use-calendar-provider';
import { formatDateBackend, splitList } from '../utils';
import { CalendarDayItem } from './calendar-day';
import { Text } from './text';

type CalendarDaysListProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions;
  previousDaysCount?: number;
};

const generateCalendarDays = (
  {
    daysCount,
    currentYear,
    currentMonth,
    isNext,
    isPrevious,
  }: {
    daysCount: number;
    currentYear: number;
    currentMonth: number;
    isNext?: boolean;
    isPrevious?: boolean;
  },
  {
    selectedDate,
    currentDate,
    handleDatePress,
    handleChangeMonth,
    field,
    setErrorMessage,
  }: {
    selectedDate: Date;
    currentDate: Date;
    handleDatePress: (date: Date) => void;
    handleChangeMonth: () => void;
    field: any;
    setErrorMessage: (message: string) => void;
  },
  isDisabledCondition: (date: Date) => boolean
) => {
  return Array.from({ length: daysCount }).map((_, i) => {
    const date = isNext
      ? new Date(
          currentMonth === 11 ? currentYear + 1 : currentYear,
          currentMonth === 11 ? 0 : currentMonth + 1,
          i + 1
        )
      : isPrevious
      ? new Date(
          currentMonth === 0 ? currentYear - 1 : currentYear,
          currentMonth === 0 ? 11 : currentMonth - 1,
          new Date(currentYear, currentMonth, 0).getDate() - daysCount + i + 1
        )
      : new Date(currentYear, currentMonth, i + 1);

    const isToday =
      date.getDate() === currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear();

    return (
      <CalendarDayItem
        key={`day-${isNext ? 'next-' : ''}${isPrevious ? 'prev-' : ''}${i + 1}`}
        date={date}
        isSelected={
          date.getDate() === selectedDate.getDate() &&
          date.getMonth() === selectedDate.getMonth() &&
          date.getFullYear() === selectedDate.getFullYear()
        }
        isToday={isToday}
        handleDatePress={() => {
          if (isDisabledCondition(date)) {
            setErrorMessage('Selected date is in the past.');
          } else {
            setErrorMessage('');
            field.onChange(formatDateBackend(date));
            handleDatePress(date);
            handleChangeMonth();
          }
        }}
        isDisabled={isDisabledCondition(date)}
        isNext={isNext}
        isPrevious={isPrevious}
      />
    );
  });
};

export const CalendarDaysList = <T extends FieldValues>({
  name,
  control,
  rules,
  previousDaysCount = 0,
}: CalendarDaysListProps<T>) => {
  const {
    selectedDate,
    currentMonth,
    currentYear,
    handleDatePress,
    handlePreviousMonth,
    handleNextMonth,
  } = useCalendar();
  const { field } = useController({ control, name, rules });
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

  const daysFromPreviousMonth =
    previousDaysCount ||
    (firstDayOfCurrentMonth === 0 ? 6 : firstDayOfCurrentMonth - 1);
  const daysFromNextMonth = (7 - lastDayOfCurrentMonth) % 7;

  const currentDate = new Date();
  const [errorMessage, setErrorMessage] = useState('');

  const commonProps = {
    selectedDate,
    currentDate,
    handleDatePress,
    field,
    setErrorMessage,
  };

  const previousMonthDays = generateCalendarDays(
    {
      daysCount: daysFromPreviousMonth,
      currentYear,
      currentMonth,
      isPrevious: true,
    },
    { ...commonProps, handleChangeMonth: handlePreviousMonth },
    (date) => {
      return (
        date.getFullYear() < currentDate.getFullYear() ||
        (date.getFullYear() === currentDate.getFullYear() &&
          date.getMonth() < currentDate.getMonth())
      );
    }
  );

  const currentMonthDays = generateCalendarDays(
    { daysCount: daysInCurrentMonth, currentYear, currentMonth },
    { ...commonProps, handleChangeMonth: () => {} },
    (date) =>
      date.getDate() < currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth()
  );

  const nextMonthDays = generateCalendarDays(
    { daysCount: daysFromNextMonth, currentYear, currentMonth, isNext: true },
    { ...commonProps, handleChangeMonth: handleNextMonth },
    () => false
  );

  const calendarDays = [
    ...previousMonthDays,
    ...currentMonthDays,
    ...nextMonthDays,
  ];

  return (
    <View className="flex-col flex-wrap">
      {splitList(calendarDays, 7).map((row, index) => (
        <View key={`row-${index}`} className="mb-2 flex-row justify-between">
          {row}
        </View>
      ))}
      {errorMessage && (
        <Text className="text-sm text-error">{errorMessage}</Text>
      )}
    </View>
  );
};

import React, { useState } from 'react';
import type { Control, RegisterOptions } from 'react-hook-form';
import { type FieldValues, type Path, useController } from 'react-hook-form';

import { splitList } from '../utils';
import { CalendarDayItem, Text, View } from './';

type CalendarDaysListProps<T extends FieldValues> = {
  currentYear: number;
  currentMonth: number;
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions;
  selectedDate: Date;
  handleDatePress: (date: Date) => void;
  handleNextMonth: () => void;
  handlePreviousMonth: () => void;
  errors: any;
};

export const CalendarDaysList = <T extends FieldValues>({
  currentYear,
  currentMonth,
  selectedDate,
  handleDatePress,
  handlePreviousMonth,
  handleNextMonth,
  name,
  control,
  rules,
}: CalendarDaysListProps<T>) => {
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
  const calendarDays: JSX.Element[] = [];
  const daysFromPreviousMonth =
    firstDayOfCurrentMonth === 0 ? 6 : firstDayOfCurrentMonth - 1;
  const currentDate = new Date();

  const [errorMessage, setErrorMessage] = useState('');

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
        handleDatePress={() => {
          if (date.getMonth() < currentDate.getMonth()) {
            setErrorMessage('Selected date is in the past.');
          } else {
            setErrorMessage('');
            field.onChange(date);
            handleDatePress(date);
            handlePreviousMonth();
          }
        }}
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
        handleDatePress={() => {
          if (
            date.getDate() < currentDate.getDate() &&
            date.getMonth() === currentDate.getMonth()
          ) {
            setErrorMessage('Selected date is in the past.');
          } else {
            setErrorMessage('');
            field.onChange(date);
            handleDatePress(date);
          }
        }}
        isDisabled={
          date.getDate() < currentDate.getDate() &&
          date.getMonth() === currentDate.getMonth()
        }
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
        handleDatePress={() => {
          setErrorMessage('');
          field.onChange(date);
          handleDatePress(date);
          handleNextMonth();
        }}
      />
    );
  });
  return (
    <View className="flex-col flex-wrap">
      {splitList(calendarDays, 7).map((row, index) => (
        <View key={`row-${index}`} className="mb-2 flex-row justify-between">
          {row}
        </View>
      ))}
      {errorMessage && (
        <Text className="text-sm text-red-500">{errorMessage}</Text>
      )}
    </View>
  );
};

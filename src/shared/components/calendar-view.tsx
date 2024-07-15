import React from 'react';

import { CalendarDaysList } from './';

interface CalendarViewProps {
  currentYear: number;
  currentMonth: number;
  selectedDate: Date;
  handleDatePress: (date: Date) => void;
}

export const CalendarView = ({
  currentYear,
  currentMonth,
  selectedDate,
  handleDatePress,
}: CalendarViewProps) => {
  return (
    <CalendarDaysList
      currentYear={currentYear}
      currentMonth={currentMonth}
      selectedDate={selectedDate}
      handleDatePress={handleDatePress}
    />
  );
};

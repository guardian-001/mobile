import type { ReactNode } from 'react';
import React, { createContext, useContext, useState } from 'react';

interface ICalendarContext {
  selectedDate: Date;
  selectedTime: string;
  currentMonth: number;
  currentYear: number;
  handleDatePress: (date: Date) => void;
  handleTimePress: (time: string) => void;
  handlePreviousMonth: () => void;
  handleNextMonth: () => void;
}

const defaultContext: ICalendarContext = {
  selectedDate: new Date(),
  selectedTime: '08:00',
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  handleDatePress: () => {},
  handleTimePress: () => {},
  handlePreviousMonth: () => {},
  handleNextMonth: () => {},
};

export const CalendarContext = createContext<ICalendarContext>(defaultContext);

interface IProps {
  children: ReactNode;
}

export function CalendarProvider({ children }: IProps) {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedTime, setSelectedTime] = useState('08:00');
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const handleDatePress = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimePress = (time: string) => {
    setSelectedTime(time);
  };

  const handlePreviousMonth = () => {
    const previousMonth = new Date(currentYear, currentMonth - 1, 1);
    setCurrentMonth(previousMonth.getMonth());
    setCurrentYear(previousMonth.getFullYear());
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentYear, currentMonth + 1, 1);
    setCurrentMonth(nextMonth.getMonth());
    setCurrentYear(nextMonth.getFullYear());
  };

  return (
    <CalendarContext.Provider
      value={{
        selectedDate,
        selectedTime,
        currentMonth,
        currentYear,
        handleDatePress,
        handleTimePress,
        handlePreviousMonth,
        handleNextMonth,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}

export function useCalendar() {
  return useContext(CalendarContext) as ICalendarContext;
}

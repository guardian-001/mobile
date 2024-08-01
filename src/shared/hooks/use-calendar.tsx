import { useState } from 'react';

export const useCalendar = () => {
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

  return {
    selectedDate,
    selectedTime,
    currentMonth,
    currentYear,
    handleDatePress,
    handleTimePress,
    handlePreviousMonth,
    handleNextMonth,
  };
};

import { useState } from 'react';

export const useCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());

  const handleDatePress = (date: Date) => {
    setSelectedDate(date);
  };

  const handlePreviousMonth = () => {
    const today = new Date();
    if (
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    ) {
      return;
    }
    const newMonth = currentMonth - 1;
    const newYear = currentYear;
    if (newMonth < 0) {
      setCurrentMonth(11);
      setCurrentYear(newYear - 1);
    } else {
      setCurrentMonth(newMonth);
      setCurrentYear(newYear);
    }
  };

  const handleNextMonth = () => {
    const newMonth = currentMonth + 1;
    const newYear = currentYear;
    if (newMonth > 11) {
      setCurrentMonth(0);
      setCurrentYear(newYear + 1);
    } else {
      setCurrentMonth(newMonth);
      setCurrentYear(newYear);
    }
  };

  return {
    selectedDate,
    currentMonth,
    currentYear,
    handleDatePress,
    handlePreviousMonth,
    handleNextMonth,
  };
};

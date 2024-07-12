import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { renderCalendarDays } from './render-calendar-days';
import { renderTimeSlots } from './time-slots';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());

  const handleDatePress = (date: any) => {
    setSelectedDate(date);
  };

  const handlePreviousMonth = () => {
    const today = new Date();
    // Check if the current month is the actual current month
    if (
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    ) {
      // If so, do not allow going to the previous month
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

  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="border border-gray-300 p-4">
        <View className="mb-2 flex-row justify-between">
          <TouchableOpacity onPress={handlePreviousMonth}>
            <Text>Previous</Text>
          </TouchableOpacity>
          <Text>
            {new Date(currentYear, currentMonth, 1).toLocaleString('default', {
              month: 'long',
              year: 'numeric',
            })}
          </Text>
          <TouchableOpacity onPress={handleNextMonth}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
        <View className="mb-2 flex-row justify-between">
          {days.map((day, index) => (
            <Text key={`day-header-${index}`} className="font-bold">
              {day}
            </Text>
          ))}
        </View>
        <View className="flex-row flex-wrap">
          {renderCalendarDays({
            currentYear,
            currentMonth,
            selectedDate,
            handleDatePress,
          })}
        </View>
      </View>
      <View className="mt-4 items-center">
        <Text className="mb-2">
          {selectedDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
        </Text>
        <View className="flex-row flex-wrap justify-center">
          {renderTimeSlots()}
        </View>
        <Text className="mt-2">West Africa Time (UTC+1)</Text>
      </View>
    </View>
  );
};

export default Calendar;

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export const renderTimeSlots = () => {
  const timeSlots = [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
  ];

  return timeSlots.map((timeSlot, index) => (
    <TouchableOpacity
      className="mx-2 my-1 border border-gray-300 bg-white px-4 py-2"
      key={`time-slot-${index}`}
    >
      <Text>{timeSlot}</Text>
    </TouchableOpacity>
  ));
};

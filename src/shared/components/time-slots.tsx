import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export const RenderTimeSlots = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');

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

  const handleTimeSlotPress = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot);
  };

  return timeSlots.map((timeSlot, index) => (
    <TouchableOpacity
      key={`time-slot-${index}`}
      className={`m-1 rounded-md  px-4 py-2 ${
        selectedTimeSlot === timeSlot
          ? ' bg-primary  '
          : 'border border-dashed border-gray-300 bg-white text-gray-500'
      }`}
      onPress={() => handleTimeSlotPress(timeSlot)}
    >
      <Text
        className={`text-xs ${
          selectedTimeSlot === timeSlot
            ? ' font-semibold text-white '
            : ' text-gray-500'
        }`}
      >
        {timeSlot}
      </Text>
    </TouchableOpacity>
  ));
};

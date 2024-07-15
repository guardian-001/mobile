import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Text } from './';
type TimeItemProps = {
  index: number;
  selectedTimeSlot: string;
  timeSlot: string;
  setSelectedTimeSlot: (timeSlot: string) => void;
};
export const TimeItem = ({
  index,
  selectedTimeSlot,
  timeSlot,
  setSelectedTimeSlot,
}: TimeItemProps) => {
  const handleTimeSlotPress = () => {
    setSelectedTimeSlot(timeSlot);
  };
  return (
    <TouchableOpacity
      key={`time-slot-${index}`}
      className={`m-1 rounded-md  px-4 py-2 ${
        selectedTimeSlot === timeSlot
          ? ' bg-primary  '
          : 'border border-dashed border-gray-300 bg-white text-gray-500'
      }`}
      onPress={() => handleTimeSlotPress()}
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
  );
};

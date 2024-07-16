import React from 'react';
import type { FieldValues, RegisterOptions } from 'react-hook-form';
import { useController } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';

import { SignupFormSchema } from '@/validations';

import { useCustomForm } from '../hooks';
import { Text } from './';

type TimeItemProps = FieldValues & {
  index: number;
  timeSlot: string;
  name: 'demoTime';
  rules?: RegisterOptions;
};
export const TimeItem = ({ name, rules, index, timeSlot }: TimeItemProps) => {
  const { control } = useCustomForm(SignupFormSchema);
  const { field } = useController({ control, name, rules });

  const handleTimeSlotPress = () => {
    field.onChange(!field.value);
  };

  return (
    <TouchableOpacity
      key={`time-slot-${index}`}
      className={`m-1 rounded-md px-4 py-2 ${
        field.value
          ? 'bg-primary'
          : 'border border-dashed border-gray-300 bg-white text-gray-500'
      }`}
      onPress={handleTimeSlotPress}
    >
      <Text
        className={`text-xs ${
          field.value ? 'font-semibold text-white' : 'text-gray-500'
        }`}
      >
        {timeSlot}
      </Text>
    </TouchableOpacity>
  );
};

// item-time-slot-render.js
import React from 'react';

import { SignupFormSchema } from '@/validations';

import { useCustomForm } from '../hooks';
import { TimeItem } from './time-item';

type RenderItemProps = {
  item: string;
  index: number;
  // onTimePress: (time: string) => void;
};

export const RenderItem: React.FC<RenderItemProps> = ({
  item,
  index,
  // onTimePress,
}) => {
  const { form } = useCustomForm(SignupFormSchema);

  return (
    <TimeItem
      timeSlot={item}
      index={index}
      name="demoTime"
      isSelected={form.getValues().demoTime === item}
      // onTimePress={onTimePress}
    />
  );
};

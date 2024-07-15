import React from 'react';

import { timeSlots } from './constants';
import { TimeItem } from './time-item';

type RenderTimeSlotsProps = {
  onTimePress: (time: string) => void;
};

export const RenderTimeSlots: React.FC<RenderTimeSlotsProps> = ({
  onTimePress,
}) => {
  return timeSlots.map((timeSlot, index) => (
    <TimeItem timeSlot={timeSlot} index={index} onTimePress={onTimePress} />
  ));
};

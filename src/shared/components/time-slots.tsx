import React, { useState } from 'react';

import { timeSlots } from './constants';
import { TimeItem } from './time-item';

export const RenderTimeSlots = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');

  return timeSlots.map((timeSlot, index) => (
    <TimeItem
      selectedTimeSlot={selectedTimeSlot}
      setSelectedTimeSlot={setSelectedTimeSlot}
      timeSlot={timeSlot}
      index={index}
    />
  ));
};

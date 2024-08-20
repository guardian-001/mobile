import * as React from 'react';

import {
  ChooseCategory,
  ChoosePropertyType,
  SwipeRight,
  SwipeUp,
} from './steps';
import type { StepContent } from './types';

export const stepsContent: StepContent[] = [
  {
    component: <ChooseCategory />,
  },
  {
    component: <ChoosePropertyType />,
  },
  {
    component: <SwipeUp />,
  },
  {
    component: <SwipeRight />,
  },
];

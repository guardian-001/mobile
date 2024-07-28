import React from 'react';

import {
  ChooseSpeciality,
  CreateProfile,
  DemoPlanning,
  DemoPlanningConfirmation,
} from './steps';

export const stepsContent: { component: React.ReactNode }[] = [
  {
    component: <ChooseSpeciality />,
  },
  {
    component: <CreateProfile />,
  },
  {
    component: <DemoPlanning />,
  },
  {
    component: <DemoPlanningConfirmation />,
  },
];

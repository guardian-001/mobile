import React from 'react';

import {
  AdoptedStyle,
  ApprovedServices,
  ProjectCategory,
  ProjectDetails,
  ProjectGallery,
} from './steps';

export const stepsContent: { component: React.ReactNode }[] = [
  {
    component: <ProjectCategory />,
  },
  {
    component: <AdoptedStyle />,
  },
  {
    component: <ProjectDetails />,
  },
  {
    component: <ApprovedServices />,
  },
  {
    component: <ProjectGallery />,
  },
];

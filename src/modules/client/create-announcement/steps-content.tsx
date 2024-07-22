import * as React from 'react';

import { type TxKeyPath } from '@/core';
import type { StepperFormProps } from '@/types';

import {
  AddPhotos,
  ChooseAdditionalInfo,
  ChooseAreaDetails,
  ChooseCategory,
  ChooseExecutionDetails,
  ChooseNeeds,
  ChoosePreferredStyle,
  ChoosePropertyType,
  ChooseRoomsToRenovate,
  ChooseSpeciality,
  ChooseWorkType,
  SaveProject,
} from './steps';

interface StepContent {
  title: TxKeyPath;
  subtitle: TxKeyPath;
  component: (props: StepperFormProps) => React.ReactElement;
}

export const stepsContent: StepContent[] = [
  {
    title: 'announcement.searchProjetTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: (props: StepperFormProps) => <ChooseSpeciality {...props} />,
  },
  {
    title: 'announcement.needsTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: (props: StepperFormProps) => <ChooseNeeds {...props} />,
  },
  {
    title: 'announcement.projectCategoryTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: (props: StepperFormProps) => <ChooseCategory {...props} />,
  },
  {
    title: 'announcement.propertyTypeTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: (props: StepperFormProps) => <ChoosePropertyType {...props} />,
  },
  {
    title: 'announcement.workTypeTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: (props: StepperFormProps) => <ChooseWorkType {...props} />,
  },
  {
    title: 'announcement.roomsToRenovateTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: (props: StepperFormProps) => (
      <ChooseRoomsToRenovate {...props} />
    ),
  },
  {
    title: 'announcement.detailsTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: (props: StepperFormProps) => <ChooseAreaDetails {...props} />,
  },
  {
    title: 'announcement.executionDetailsTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: (props: StepperFormProps) => (
      <ChooseExecutionDetails {...props} />
    ),
  },
  {
    title: 'announcement.preferredStyleTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: (props: StepperFormProps) => <ChoosePreferredStyle {...props} />,
  },
  {
    title: 'announcement.additionalInfoTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: (props: StepperFormProps) => <ChooseAdditionalInfo {...props} />,
  },
  {
    title: 'announcement.uploadPhotosTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: (props: StepperFormProps) => <AddPhotos {...props} />,
  },
  {
    title: 'announcement.saveProjectTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: (props: StepperFormProps) => <SaveProject {...props} />,
  },
];

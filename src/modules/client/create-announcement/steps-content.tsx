import * as React from 'react';

import { type TxKeyPath } from '@/core';

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
  LastStep,
  PhoneVerificationCode,
  SaveProject,
} from './steps';

interface StepContent {
  title: TxKeyPath;
  subtitle: TxKeyPath;
  component: React.ReactElement;
}

export const stepsContent: StepContent[] = [
  {
    title: 'announcement.searchProjetTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: <ChooseSpeciality />,
  },
  {
    title: 'announcement.needsTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: <ChooseNeeds />,
  },
  {
    title: 'announcement.projectCategoryTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: <ChooseCategory />,
  },
  {
    title: 'announcement.propertyTypeTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: <ChoosePropertyType />,
  },
  {
    title: 'announcement.workTypeTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: <ChooseWorkType />,
  },
  {
    title: 'announcement.roomsToRenovateTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: <ChooseRoomsToRenovate />,
  },
  {
    title: 'announcement.detailsTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: <ChooseAreaDetails />,
  },
  {
    title: 'announcement.executionDetailsTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: <ChooseExecutionDetails />,
  },
  {
    title: 'announcement.preferredStyleTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: <ChoosePreferredStyle />,
  },
  {
    title: 'announcement.additionalInfoTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: <ChooseAdditionalInfo />,
  },
  {
    title: 'announcement.uploadPhotosTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: <AddPhotos />,
  },
  {
    title: 'announcement.saveProjectTitle',
    subtitle: 'announcement.selectSpecialitéTitle',
    component: <SaveProject />,
  },
  {
    title: 'resetpass.verificationCodeTitle',
    subtitle: 'resetpass.verificationCodeDescription',
    component: <PhoneVerificationCode />,
  },
  {
    title: 'resetpass.verificationCodeTitle',
    subtitle: 'resetpass.verificationCodeDescription',
    component: <LastStep />,
  },
];

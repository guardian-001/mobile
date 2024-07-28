import type { SvgProps } from 'react-native-svg';

import type { AnnouncementType } from '@/types/announcement';

export type sharedType = {
  id: number;
  label: string;
  icon: React.FunctionComponent<SvgProps>;
};
export type preferredStyleType = {
  id: number;
  label: string;
};
export type workType = {
  id: number;
  header: string;
  description: string;
};

export type SpecialityFormType = Pick<AnnouncementType, 'architectSpeciality'>;
export type needsFormType = Pick<AnnouncementType, 'needs'>;
export type workTypeFormType = Pick<AnnouncementType, 'workType'>;
export type architecturalStyleFormType = Pick<
  AnnouncementType,
  'architecturalStyle'
>;
export type projectCategoryFormType = Pick<AnnouncementType, 'projectCategory'>;
export type projectExtensionsFormType = Pick<
  AnnouncementType,
  'projectExtensions'
>;
export type propertyTypeFormType = Pick<AnnouncementType, 'propertyType'>;
export type piecesRenovateFormType = Pick<AnnouncementType, 'piecesRenovate'>;
export type CreateProfileFormType = Pick<
  AnnouncementType,
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'phoneNumber'
  | 'rules'
  | 'receiveNotifications'
>;
export type AreaDetailsFormType = Pick<
  AnnouncementType,
  'address' | 'city' | 'terrainSurface' | 'workSurface' | 'numberFloors'
>;
export type ExecutionDetailsFormType = Pick<
  AnnouncementType,
  'budget' | 'description'
>;

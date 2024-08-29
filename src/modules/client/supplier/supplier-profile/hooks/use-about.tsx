import { Location } from '@/assets/icons';
import { Mail, Phone } from '@/assets/icons/archimatch';
import { architect } from '@/modules/client/inspiration/dump-data/architect-profile';

import type { iconDataType } from '../types';

export const useAbout = () => {
  const iconData: iconDataType[] = [
    { id: 1, icon: Location, label: architect.address },
    { id: 2, icon: Mail, label: architect.address },
    { id: 3, icon: Phone, label: architect.architectSpeciality.label },
  ];

  return {
    iconData,
  };
};

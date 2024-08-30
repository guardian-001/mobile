import { Location } from '@/assets/icons';
import { Mail, Phone } from '@/assets/icons/archimatch';

import type { AboutProps, iconDataType } from '../types';

export const useAbout = ({ supplierData }: AboutProps) => {
  const iconData: iconDataType[] = supplierData
    ? [
        { id: 1, icon: Location, label: supplierData?.companyAddress },
        { id: 2, icon: Mail, label: supplierData?.user?.email },
        ...(supplierData?.user?.phoneNumber
          ? [{ id: 3, icon: Phone, label: supplierData.user.phoneNumber }]
          : []),
      ]
    : [];

  return {
    iconData,
  };
};

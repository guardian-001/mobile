import { useSpecialityTypesApi } from '@/api/supplier/createAccount/use-speciality-types';
import { useCustomForm } from '@/core';
import type { TagType } from '@/types';

import {
  CategoryData,
  PropertyData,
} from '../../create-announcement/dump-data';
import { specialityTypeSchema } from '../schema/speciality-schema';

export const useSupplier = () => {
  const {
    data,
    isLoading: isLoadingSpeciality,
    isError: isErrorSpeciality,
    isSuccess: isSuccessSpeciality,
  } = useSpecialityTypesApi();
  const specialityTypesData: TagType[] =
    data?.map((type) => {
      return {
        id: type.id,
        value: type.content,
        displayName: type.label,
        imageIcon: type.icon,
      };
    }) || [];

  const { control } = useCustomForm(specialityTypeSchema, {
    specialityType: 'Matériaux de construction',
  });

  return {
    CategoryData,
    PropertyData,
    specialityTypesData,
    isLoadingSpeciality,
    isErrorSpeciality,
    isSuccessSpeciality,
    control,
  };
};

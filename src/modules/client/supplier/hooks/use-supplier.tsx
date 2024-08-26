import { useCallback } from 'react';
import type { Control } from 'react-hook-form';
import { useController } from 'react-hook-form';

import { useCitiesApi } from '@/api/client/use-cities';
import { useSpecialityTypesApi } from '@/api/supplier/createAccount/use-speciality-types';
import { useAllSuppliersApi } from '@/api/supplier/profile/use-all-suppliers';
import { useCustomForm } from '@/core';
import type { Option } from '@/shared/components';
import { useModal } from '@/shared/components';
import type { TagType } from '@/types';

import {
  CategoryData,
  PropertyData,
} from '../../create-announcement/dump-data';
import { citySchema, specialityTypeSchema } from '../schema';
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
    specialityType: specialityTypesData[0]?.displayName,
  });

  const {
    data: suppliers,
    isLoading: isLoadingSuppliers,
    isError: isErrorSuppliers,
    isSuccess: isSuccessSuppliers,
  } = useAllSuppliersApi();

  const modal = useModal();
  const { data: cities } = useCitiesApi();
  const cityOptions =
    cities?.map((city) => ({
      label: city.displayName,
      value: city.value,
    })) || [];
  const { control: controlCity } = useCustomForm(citySchema, {
    city: cityOptions[0]?.label,
  });

  const { field } = useController({
    control: controlCity as Control<{ city: string }, any>,
    name: 'city',
  });
  const onSelect = useCallback(
    (value: string | number) => {
      field.onChange(value);
    },
    [field]
  );
  const onSelectOption = useCallback(
    (option: Option) => {
      onSelect?.(option.value);
      modal.dismiss();
    },
    [modal, onSelect]
  );
  return {
    CategoryData,
    PropertyData,
    specialityTypesData,
    isLoadingSpeciality,
    isErrorSpeciality,
    isSuccessSpeciality,
    control,
    suppliers,
    isLoadingSuppliers,
    isErrorSuppliers,
    isSuccessSuppliers,
    onSelectOption,
    cityOptions,
    modal,
    field,
  };
};

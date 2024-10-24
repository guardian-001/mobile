import { useCallback, useEffect, useMemo } from 'react';
import type { Control } from 'react-hook-form';
import { useController } from 'react-hook-form';

import { useCitiesApi } from '@/api/client/use-cities';
import { useSpecialityTypesApi } from '@/api/supplier/createAccount/use-speciality-types';
import { useSuppliersBySpecialityTypeApi } from '@/api/supplier/profile/use-get-suppliers-by-speciality';
import { useCustomForm } from '@/core';
import type { Option } from '@/shared/components';
import { useModal } from '@/shared/components';
import { SearchSchema } from '@/shared/validations';

import { citySchema, specialityTypeSchema } from '../schema';
export const useSupplier = () => {
  const {
    data: specialityTypesData,
    isLoading: isLoadingSpeciality,
    isError: isErrorSpeciality,
    isSuccess: isSuccessSpeciality,
  } = useSpecialityTypesApi();
  const { data: cities } = useCitiesApi();
  const {
    control,
    setValue,
    watch: watchSpecialityType,
  } = useCustomForm(specialityTypeSchema);
  const { control: controlCity } = useCustomForm(citySchema);
  useEffect(() => {
    if (specialityTypesData?.length) {
      setValue('specialityType', specialityTypesData[0].label || '');
    }
  }, [specialityTypesData, setValue]);
  const selectedSpecialityType: string = watchSpecialityType('specialityType');
  const selectedSpecialityTypeId = Array.isArray(specialityTypesData)
    ? specialityTypesData.find(
        (speciality) => speciality.label === selectedSpecialityType
      )?.id || 1
    : 1;

  const {
    data: suppliers,
    isLoading: isLoadingSuppliers,
    isError: isErrorSuppliers,
    isSuccess: isSuccessSuppliers,
  } = useSuppliersBySpecialityTypeApi({
    variables: { specialityId: selectedSpecialityTypeId },
  });

  const cityOptions = Array.isArray(cities)
    ? cities.map((city) => ({
        label: city.displayName,
        value: city.value,
      }))
    : [];
  const { field } = useController({
    control: controlCity as Control<{ city: string }, any>,
    name: 'city',
  });
  const modal = useModal();
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
  const {
    handleSubmit,
    control: searchControl,
    watch,
  } = useCustomForm(SearchSchema);
  const searchValue = watch('search');
  const selectedCity = field.value;
  const filteredSuppliers = useMemo(() => {
    if (!suppliers) return [];
    return suppliers.filter((item) => {
      const matchesSearch =
        !searchValue ||
        item.companyName.toLowerCase().includes(searchValue.toLowerCase());
      const matchesCity =
        !selectedCity ||
        item.companyAddress.toLowerCase().includes(selectedCity.toLowerCase());
      return matchesSearch && matchesCity;
    });
  }, [searchValue, suppliers, selectedCity]);
  return {
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
    searchControl,
    handleSubmit,
    filteredSuppliers,
  };
};

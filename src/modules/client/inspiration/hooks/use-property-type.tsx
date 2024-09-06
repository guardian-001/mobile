import { useAllPropertyTypesApi } from '@/api/client';
import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';
import type { TagType } from '@/types';

import { PropertyTypeSchema } from '../schema/property-type-schema';
import type { InspirationRequestType, propertyTypeFormType } from '../types';

export const usePropertyType = () => {
  const { onHandleBack, onHandleNext, setFormData, formData } =
    useFormStepper<InspirationRequestType>();

  const { handleSubmit, control, errors } = useCustomForm(PropertyTypeSchema, {
    propertyType: formData?.propertyType,
  });
  const error = errors?.propertyType?.message as TxKeyPath | undefined;

  const { data, isError, isLoading, isSuccess } = useAllPropertyTypesApi();
  const PropertyData: TagType[] =
    data?.map((type) => {
      return {
        id: type.id,
        value: type.label,
        displayName: type.label,
        imageIcon: type.icon,
      };
    }) || [];
  const onSubmit = (data: propertyTypeFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };
  const onRollBack = () => {
    formData.propertyType = [];
    onHandleBack();
  };

  return {
    onRollBack,
    onHandleNext,
    setFormData,
    formData,
    handleSubmit,
    control,
    error,
    onSubmit,
    PropertyData,
    isError,
    isLoading,
    isSuccess,
  };
};

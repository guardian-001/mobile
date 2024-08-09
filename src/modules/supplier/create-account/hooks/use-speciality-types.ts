import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

import type { User } from '@/api/auth';
import { useFirstConnectionApi } from '@/api/auth/use-first-connection';
import { useSpecialityTypesApi } from '@/api/supplier/createAccount/use-speciality-types';
import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { getUser } from '@/core/auth/utils';
import { useFormStepper } from '@/shared';
import type { TagType } from '@/types';

import { specialityTypeSchema } from '../schemas/create-account-schemas';
import type { FirstConnectionType, SpecialityType } from '../types';

export const useSpecialityTypes = () => {
  const router = useRouter();
  const { formData, setFormData, onHandleNext, onHandleBack } =
    useFormStepper<FirstConnectionType>();
  const [user, setUser] = useState<User | null>();
  const [apiError, setApiError] = useState<TxKeyPath | undefined>();

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser();
      setUser(userData || null);
    };

    fetchUser();
  }, []);

  const { handleSubmit, control, errors } = useCustomForm(
    specialityTypeSchema,
    {
      specialityType: formData.specialityType,
    }
  );
  const { data, isPending, isError, isSuccess, error } =
    useSpecialityTypesApi();
  const specialityTypesData: TagType[] =
    data?.map((type) => {
      return {
        id: type.id,
        value: type.content,
        displayName: type.label,
        imageIcon: type.icon,
      };
    }) || [];
  const firstConnection = useFirstConnectionApi();
  const onSubmit = (selectedData: SpecialityType) => {
    setFormData((prev: FirstConnectionType) => ({
      ...prev,
      ...selectedData,
    }));
    firstConnection.mutate(
      {
        ...formData,
        specialityType: selectedData.specialityType,
        email: user?.email || '',
        appearance: 'Petite' || '',
      },
      {
        onSuccess: () => {
          router.replace(`/(supplier)/(private)/(profile)/profile`);
        },
        onError: (errorApi) => {
          setApiError(errorApi?.message as TxKeyPath | undefined);
        },
      }
    );
  };
  const errorType = error?.message as TxKeyPath | undefined;
  const errorValidation = errors.specialityType?.message as
    | TxKeyPath
    | undefined;
  return {
    onHandleBack,
    onHandleNext,
    setFormData,
    formData,
    handleSubmit,
    control,
    errorType,
    isSuccess,
    onSubmit,
    data,
    isPending,
    isError,
    errorValidation,
    specialityTypesData,
    apiError,
  };
};

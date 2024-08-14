import { useRouter } from 'expo-router';
import { useEffect } from 'react';

import { useSupplierProfileApi } from '@/api/supplier/profile/use-profile';
import { useUpdateSupplierProfileApi } from '@/api/supplier/profile/use-update-supplier-profile';
import { useCustomForm } from '@/core';
import { showSuccesMessage } from '@/shared/components';

import { CompanyInformationSchema } from '../schemas';
import type { CompanyInformationFormType } from '../type';

export const useCompanyInformation = () => {
  const { handleSubmit, control, form, reset } = useCustomForm(
    CompanyInformationSchema
  );
  const router = useRouter();
  const {
    data: SupplierUser,
    isSuccess,
    isLoading,
    isError,
  } = useSupplierProfileApi();
  useEffect(() => {
    if (isSuccess && SupplierUser) {
      reset({
        companyName: SupplierUser?.companyName,
        companySpeciality: SupplierUser?.companySpeciality,
        companyAddress: SupplierUser?.companyAddress,
        phoneNumber: SupplierUser?.user?.phoneNumber,
      });
    }
  }, [isSuccess, SupplierUser, reset]);
  const updateProfile = useUpdateSupplierProfileApi();

  const onSubmit = (data: CompanyInformationFormType) => {
    if (
      data.companyName !== SupplierUser?.companyName ||
      data.companySpeciality !== SupplierUser?.companySpeciality ||
      data.companyAddress !== SupplierUser?.companyAddress
    ) {
      updateProfile.mutate(data, {
        onSuccess: (response) => {
          showSuccesMessage(response.data.message);
          router.back();
        },
      });
    } else router.back();
  };
  return {
    control,
    form,
    reset,
    handleSubmit,
    onSubmit,
    isSuccess,
    isLoading,
    isError,
  };
};

import { useRouter } from 'expo-router';
import { useEffect } from 'react';

import { useUpdateSupplierBioApi } from '@/api/supplier/profile/use-update-supplier-bio';
import { useCustomForm } from '@/core';
import { showSuccesMessage } from '@/shared/components';

import { BioSchema } from '../schemas/bio-schema';
import type { BioFormType } from '../type';
import { useProfileInfo } from './use-profile-info';

export const useUpdateBio = () => {
  const { handleSubmit, control, form, reset } = useCustomForm(BioSchema);
  const router = useRouter();
  const { data: architect, isSuccess } = useProfileInfo();

  useEffect(() => {
    if (isSuccess && architect) {
      reset({
        bio: architect?.bio,
      });
    }
  }, [isSuccess, architect, reset]);

  const updateProfile = useUpdateSupplierBioApi();

  const onSubmit = (data: BioFormType) => {
    if (data.bio !== architect?.bio) {
      updateProfile.mutate(data, {
        onSuccess: (response) => {
          showSuccesMessage(response.data.message);
          router.back();
          router.back();
        },
      });
    } else {
      router.back(), router.back();
    }
  };
  return {
    control,
    form,
    reset,
    handleSubmit,
    onSubmit,
  };
};

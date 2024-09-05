import { useEffect } from 'react';

import { useUpdateArchitectBioApi } from '@/api/architect/profile/use-update-supplier-bio';
import { useCustomForm } from '@/core';
import { showErrorMessage, showSuccesMessage } from '@/shared/components';

import { BioSchema } from '../schemas/bio-schema';
import type { BioFormType } from '../type';
import { useProfileInfo } from './use-profile-info';

export const useUpdateBio = () => {
  const { handleSubmit, control, form, reset } = useCustomForm(BioSchema);

  const { data: architect, isSuccess } = useProfileInfo();

  useEffect(() => {
    if (isSuccess && architect) {
      reset({
        bio: architect?.bio,
      });
    }
  }, [isSuccess, architect, reset]);

  const updateProfile = useUpdateArchitectBioApi();

  const onSubmit = (data: BioFormType) => {
    const formData = new FormData();
    formData.append('bio', data.bio);
    if (data.bio !== architect?.bio) {
      updateProfile.mutate(formData, {
        onSuccess: (response) => {
          showSuccesMessage(response.data.message);
        },
        onError: (error) => {
          showErrorMessage(error.message);
        },
      });
    }
  };
  return {
    control,
    form,
    reset,
    handleSubmit,
    onSubmit,
    architect,
  };
};

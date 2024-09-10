import { useEffect, useState } from 'react';

import { useUpdateArchitectAboutApi } from '@/api/architect/profile/use-update-supplier-bio';
import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { showErrorMessage, showSuccesMessage } from '@/shared/components';

import { BioSchema } from '../schemas/bio-schema';
import type { BioFormType } from '../type';
import { useProfileInfo } from './use-profile-info';

export const useUpdateBio = () => {
  const [updateBio, setUpdateBio] = useState(false);
  const { handleSubmit, control, form, reset, errors } =
    useCustomForm(BioSchema);

  const { data: architect, isSuccess, refetch } = useProfileInfo();

  useEffect(() => {
    if (isSuccess && architect) {
      reset({
        bio: architect?.bio,
      });
    }
  }, [isSuccess, architect, reset]);

  const handleUpdateBioForm = () => {
    setUpdateBio(!updateBio);
  };
  const error = errors.bio?.message as TxKeyPath | undefined;

  const updateProfile = useUpdateArchitectAboutApi();

  const onSubmit = (data: BioFormType) => {
    const formData = new FormData();
    formData.append('bio', data.bio);
    setUpdateBio(!updateBio);
    if (data.bio !== architect?.bio) {
      updateProfile.mutate(formData, {
        onSuccess: (response) => {
          showSuccesMessage(response.data.message);
          refetch();
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
    updateBio,
    handleUpdateBioForm,
    error,
  };
};

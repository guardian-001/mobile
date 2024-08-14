import { useRouter } from 'expo-router';
import { useEffect } from 'react';

import type { ProfileSocialLinksFormData } from '@/api/profileSettings/type';
import { useSupplierProfileApi } from '@/api/supplier/profile/use-profile';
import { useUpdateSocialLinkApi } from '@/api/supplier/profile/use-update-social-link';
import { Facebook, Instagram, Site } from '@/assets/icons';
import { useCustomForm } from '@/core';
import { showSuccesMessage } from '@/shared/components';
import { SocialLinksSchema } from '@/shared/validations';

import type { SocialLink, SocialLinksFormType } from '../type';

export const useSocialLinks = () => {
  const { handleSubmit, control, form, reset } =
    useCustomForm(SocialLinksSchema);
  const router = useRouter();
  const {
    data: SupplierUser,
    isSuccess,
    isLoading,
    isError,
  } = useSupplierProfileApi();
  let userSocialLinks: ProfileSocialLinksFormData | undefined =
    SupplierUser?.socialLinks;

  useEffect(() => {
    if (isSuccess && SupplierUser) {
      reset({
        facebook: userSocialLinks?.facebook,
        instagram: userSocialLinks?.instagram,
        website: userSocialLinks?.website,
      });
    }
  }, [isSuccess, SupplierUser, userSocialLinks, reset]);
  const updateProfile = useUpdateSocialLinkApi();

  const onSubmit = (data: SocialLinksFormType) => {
    if (
      data.facebook !== userSocialLinks?.facebook ||
      data.instagram !== userSocialLinks?.instagram ||
      data.website !== userSocialLinks?.website
    ) {
      updateProfile.mutate(data, {
        onSuccess: (response) => {
          showSuccesMessage(response.data.message);
          router.back();
        },
      });
    } else router.back();
  };

  const socialLinks: SocialLink[] = [
    { Icon: Facebook, name: 'facebook' },
    { Icon: Instagram, name: 'instagram' },
    { Icon: Site, name: 'website' },
  ];
  return {
    control,
    form,
    reset,
    handleSubmit,
    onSubmit,
    isSuccess,
    isLoading,
    isError,
    socialLinks,
  };
};

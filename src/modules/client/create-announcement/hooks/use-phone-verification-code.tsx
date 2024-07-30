import {
  useCreateAnnouncementApi,
  useVerifyPhoneVerificationCodeApi,
} from '@/api/client/announcements/mutation';
import { useCustomForm, useRouteName } from '@/core';
import { useFormStepper } from '@/shared';
import { showError } from '@/shared/components';
import { fetchAllImages } from '@/shared/constants';
import type { verificationCodeType } from '@/types';
import type { AnnouncementType } from '@/types/announcement';

import { CreateAnnouncementStepThirteenSchema } from '../schemas';

export const usePhoneVerificationCode = () => {
  const { onHandleBack, onHandleNext, setFormData, formData } =
    useFormStepper<AnnouncementType>();
  const space = useRouteName();
  const phone = '*********' + formData?.client?.user?.phoneNumber.slice(-3);
  const { handleSubmit, control } = useCustomForm(
    CreateAnnouncementStepThirteenSchema
  );
  const verifyPhoneVerificationCode = useVerifyPhoneVerificationCodeApi();
  const createAnnouncement = useCreateAnnouncementApi();
  const onSubmit = (data: verificationCodeType) => {
    fetchAllImages(formData.projectImages ?? []).then((files) => {
      if (formData.terrainSurface === '') {
        delete formData.terrainSurface;
      }
      if (formData.architecturalStyle === 0) {
        delete formData.architecturalStyle;
      }
      if (formData.numberFloors === 0) {
        delete formData.numberFloors;
      }
      const newData = {
        ...formData,
      };
      delete newData.projectImages;

      let imgs = new FormData();
      files.forEach((file) => {
        imgs.append('projectImages', file);
      });
      verifyPhoneVerificationCode.mutate(
        { ...data, phoneNumber: formData.client.user.phoneNumber },
        {
          onSuccess: () => {
            createAnnouncement.mutate(newData, {
              onSuccess: () => {
                onHandleNext();
              },
              onError: (errorApi) => {
                showError(errorApi);
                throw errorApi;
              },
            });
          },
          onError: (errorApi) => {
            throw errorApi;
          },
        }
      );
    });
  };
  return {
    onHandleBack,
    onHandleNext,
    setFormData,
    formData,
    handleSubmit,
    control,
    onSubmit,
    phone,
    space,
  };
};

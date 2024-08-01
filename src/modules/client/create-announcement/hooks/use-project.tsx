import { useIsUserFound } from '@/api/auth';
import { useSendPhoneVerificationCodeApi } from '@/api/client/announcements/mutation';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';
import type { AnnouncementType } from '@/types/announcement';

import { CreateAnnouncementStepTwelveSchema } from '../schemas';
import type { CreateProfileFormType } from '../types';

export const useProject = () => {
  const { onHandleBack, onHandleNext, setFormData, formData } =
    useFormStepper<AnnouncementType>();
  const { handleSubmit, control } = useCustomForm(
    CreateAnnouncementStepTwelveSchema,
    {
      firstName: formData?.client.user.firstName,
      lastName: formData?.client.user.lastName,
      email: formData?.client.user.email,
      phoneNumber: formData?.client.user.phoneNumber,
      rules: formData?.client.user.rules,
      receiveNotifications: formData?.client.user.receiveNotifications,
    }
  );
  const SendPhoneVerificationCode = useSendPhoneVerificationCodeApi();
  const isUserFound = useIsUserFound();

  const onSubmit = (data: CreateProfileFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      client: { user: { ...data, userType: 'Client' } },
    }));
    isUserFound.mutate(
      { email: data.email, phoneNumber: data.phoneNumber },
      {
        onSuccess: () => {
          SendPhoneVerificationCode.mutate(
            { phoneNumber: data.phoneNumber },
            {
              onSuccess: () => {
                onHandleNext();
              },
              onError: (errorApi) => {
                throw errorApi;
              },
            }
          );
        },
        onError: (errorApi) => {
          throw errorApi;
        },
      }
    );
  };
  return {
    onHandleBack,
    onHandleNext,
    setFormData,
    formData,
    handleSubmit,
    control,
    onSubmit,
  };
};

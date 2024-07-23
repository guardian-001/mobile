import { useRouter } from 'expo-router';
import React from 'react';

import { translate } from '@/core';
import { StepperButton } from '@/modules/shared';
import { View } from '@/shared/components';
import type { StepperFormProps } from '@/types';
/*import { AnnouncementType } from '@/types/announcement';
import { CreateAnnouncementStepTwelveSchema } from '../schemas';
import { ControlledPhoneNumberInput } from '@/shared/components/controlled-phone-number-input';*/
export function SaveProject({}: // onHandleBack,
//onHandleNext,
//setFormData,
//formData,
StepperFormProps) {
  const router = useRouter();
  /*const { handleSubmit, control, errors } = useCustomForm(
    CreateAnnouncementStepTwelveSchema,
    { firstName: formData?.firstName,
      lastName: formData?.lastName,
      email: formData?.email,
      phoneNumber: formData?.phoneNumber, 
      rules: formData?.rules,
      receiveNotifications: formData?.receiveNotifications
    }
  );
  type CreateProfileFormType = Pick<AnnouncementType, 
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'phoneNumber'
  | 'rules'
  | 'receiveNotifications'
    >;

  const onSubmit = (data: CreateProfileFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };
*/
  return (
    <View className="flex flex-1 items-center justify-between pt-8">
      {/*     <View className=" flex h-fit w-[90%] gap-5 rounded-3xl bg-white px-4 py-5 shadow-md">
        <ControlledInput
          testID="name-input"
          control={control}
          name="firstName"
          label={translate('labels.name')}
          placeholder={translate('labels.name')}
        />
        <ControlledInput
          testID="surname-input"
          control={control}
          name="lastName"
          label={translate('labels.surname')}
          placeholder={translate('labels.surname')}
        />
        <ControlledInput
          testID="email-input"
          control={control}
          name="email"
          label={translate('labels.mail')}
          placeholder={translate('labels.mail')}
        />
        <ControlledPhoneNumberInput
          name="phoneNumber"
          control={control}
          label={translate('labels.phone')}
          rules={{ required: 'Phone number is required' }}
        />
  
      </View>*/}
      <StepperButton
        onPressHandler={() => {
          router.back();
        }}
        label={translate('announcement.buttonLabel')}
      />
    </View>
  );
}

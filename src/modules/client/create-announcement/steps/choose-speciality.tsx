import React from 'react';

import type { TxKeyPath } from '@/core';
import { translate } from '@/core';
import { StepperButton } from '@/modules/shared';
import { Text, ToggleCard, View } from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';
import { useFormStepper } from '@/shared/providers/use-form-stepper-provider';
import type { AnnouncementType } from '@/types/announcement';

import { toggleCardData } from '../dump-data';
import { CreateAnnouncementStepOneSchema } from '../schemas';

export function ChooseSpeciality() {
  const { onHandleNext, setFormData, formData } =
    useFormStepper<AnnouncementType>();
  const { handleSubmit, control, errors } = useCustomForm(
    CreateAnnouncementStepOneSchema,
    { architectSpeciality: formData.architectSpeciality }
  );
  type SpecialityFormType = Pick<AnnouncementType, 'architectSpeciality'>;

  const onSubmit = (data: SpecialityFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };

  const error = errors?.architectSpeciality?.message as TxKeyPath | undefined;
  return (
    <View className="flex flex-1 justify-between pt-4">
      <View className="h-[85%] items-center gap-4">
        {toggleCardData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className=" h-40 w-64 rounded-2xl"
            title={cardData.label}
            svgComponent={cardData.icon}
            name="architectSpeciality"
            control={control}
            value={cardData.id}
            classNameText="my-3"
          />
        ))}
      </View>
      {error && (
        <Text className="text-sm text-error dark:text-error" tx={error} />
      )}
      <StepperButton
        onPressHandler={handleSubmit(onSubmit)}
        label={translate('signup.suivant')}
      />
    </View>
  );
}

import React from 'react';

import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { StepButtons } from '@/modules/shared';
import { Text, ToggleCard, View } from '@/shared/components';
import { useFormStepper } from '@/shared/providers/use-form-stepper-provider';
import type { AnnouncementType } from '@/types/announcement';

import { workTypeData } from '../dump-data';
import { CreateAnnouncementStepFiveSchema } from '../schemas';

export function ChooseWorkType() {
  const { onHandleBack, onHandleNext, setFormData, formData } =
    useFormStepper<AnnouncementType>();
  const { handleSubmit, control, errors } = useCustomForm(
    CreateAnnouncementStepFiveSchema,
    { workType: formData?.workType }
  );

  type workTypeFormType = Pick<AnnouncementType, 'workType'>;
  const onSubmit = (data: workTypeFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };
  const error = errors?.workType?.message as TxKeyPath | undefined;
  return (
    <View className="flex flex-1 justify-between pt-4">
      <View className="gap-4">
        {workTypeData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className="h-16 w-full !items-start rounded-lg"
            title={cardData.header}
            description={cardData.description}
            name="workType"
            control={control}
            value={cardData.id}
          />
        ))}
      </View>
      {error && (
        <Text className="text-sm text-error dark:text-error" tx={error} />
      )}
      <StepButtons
        previous={{ handlePreviousStep: onHandleBack, label: 'signup.retour' }}
        next={{ handleSubmit: handleSubmit(onSubmit), label: 'signup.suivant' }}
      />
    </View>
  );
}

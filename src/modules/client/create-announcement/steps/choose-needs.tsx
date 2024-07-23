import React from 'react';

import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { StepButtons } from '@/modules/shared';
import { Text, ToggleCard, View } from '@/shared/components';
import { useFormStepper } from '@/shared/providers/use-form-stepper-provider';
import type { AnnouncementType } from '@/types/announcement';

import { NeedsData } from '../dump-data';
import { CreateAnnouncementStepTwoSchema } from '../schemas';

export function ChooseNeeds() {
  const { onHandleBack, onHandleNext, setFormData, formData } =
    useFormStepper<AnnouncementType>();
  const { handleSubmit, control, errors } = useCustomForm(
    CreateAnnouncementStepTwoSchema,
    { needs: formData?.needs || [] }
  );

  type needsFormType = Pick<AnnouncementType, 'needs'>;
  const onSubmit = (data: needsFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };

  const error = errors?.needs?.message as TxKeyPath | undefined;
  return (
    <View className="flex flex-1 justify-between pt-4">
      <View className="gap-4">
        {NeedsData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className="flex h-16  w-full flex-row rounded-lg"
            title={cardData.label}
            svgComponent={cardData.icon}
            name="needs"
            control={control}
            multi={true}
            value={cardData.id}
          />
        ))}
        {error && (
          <Text className="text-sm text-error dark:text-error" tx={error} />
        )}
      </View>
      <StepButtons
        previous={{ handlePreviousStep: onHandleBack, label: 'signup.retour' }}
        next={{
          handleSubmit: handleSubmit(onSubmit),
          label: 'signup.suivant',
        }}
      />
    </View>
  );
}

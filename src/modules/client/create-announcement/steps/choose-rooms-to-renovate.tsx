import React from 'react';

import { useCustomForm } from '@/core';
import { StepButtons } from '@/modules/shared';
import { Counter, View } from '@/shared/components';
import type { StepperFormProps } from '@/types';
import type { AnnouncementType } from '@/types/announcement';

import { RenovateData } from '../dump-data';
import { CreateAnnouncementStepSixSchema } from '../schemas';

export function ChooseRoomsToRenovate({
  onHandleBack,
  onHandleNext,
  setFormData,
  formData,
}: StepperFormProps) {
  const { handleSubmit, control } = useCustomForm(
    CreateAnnouncementStepSixSchema,
    { piecesRenovate: formData?.piecesRenovate }
  );
  type piecesRenovateFormType = Pick<AnnouncementType, 'piecesRenovate'>;
  const onSubmit = (data: piecesRenovateFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };

  return (
    <View className="flex flex-1 items-center justify-between pt-8">
      <View className="gap-4">
        {RenovateData.map((item, index) => (
          <Counter
            key={index}
            title={item.label}
            svgComponent={item.icon}
            name="piecesRenovate"
            control={control}
            id={item.id}
          />
        ))}
      </View>
      <StepButtons
        previous={{ handlePreviousStep: onHandleBack, label: 'signup.retour' }}
        next={{ handleSubmit: handleSubmit(onSubmit), label: 'signup.suivant' }}
      />
    </View>
  );
}

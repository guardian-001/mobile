import React from 'react';

import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { StepButtons } from '@/modules/shared';
import { Text, ToggleCard, View } from '@/shared/components';
import type { StepperFormProps } from '@/types';
import type { AnnouncementType } from '@/types/announcement';

import { CreateAnnouncementStepFiveSchema } from '../schemas';

type workTypeData = {
  id: number;
  label: string;
  tip: string;
};
const workTypeData: workTypeData[] = [
  {
    id: 1,
    label: 'Construction neuve',
    tip: "La création d'une nouvelle structure entièrement neuve à partir de zéro",
  },
  {
    id: 2,
    label: 'Rénovation extérieure',
    tip: "Rafraîchissement ou transformation de l'apparence extérieure d'un bâtiment existant",
  },
  {
    id: 3,
    label: 'Extension & aménagement',
    tip: "Agrandissement et optimisation des espaces d'un bâtiment existant",
  },
  {
    id: 4,
    label: 'Surélévation',
    tip: "Ajout d'un ou plusieurs niveaux à un bâtiment existant",
  },
  {
    id: 5,
    label: 'Rénovation intérieure',
    tip: "Transformation et modernisation des espaces intérieurs d'un bâtiment",
  },
  {
    id: 6,
    label: 'Aménagement de combles',
    tip: 'Transformation des combles en pièces habitables',
  },
  {
    id: 7,
    label: 'Autre',
    tip: '',
  },
];

export function ChooseWorkType({
  onHandleBack,
  onHandleNext,
  setFormData,
  formData,
}: StepperFormProps) {
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
            title={cardData.label}
            tip={cardData.tip}
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

import React from 'react';
import type { SvgProps } from 'react-native-svg';

import { Home } from '@/assets/icons';
import { useCustomForm } from '@/core';
import { StepButtons } from '@/modules/shared';
import { Counter, View } from '@/shared/components';
import type { StepperFormProps } from '@/types';
import type { AnnouncementType } from '@/types/announcement';

import { CreateAnnouncementStepSixSchema } from '../schemas';

type RenovateTypeData = {
  id: number;
  label: string;
  icon: React.FunctionComponent<SvgProps>;
};
const RenovateData: RenovateTypeData[] = [
  { id: 1, label: 'Suite parentale', icon: Home },
  { id: 2, label: 'Chambre', icon: Home },
  { id: 3, label: 'Chambre enfant', icon: Home },
  { id: 4, label: 'Salon', icon: Home },
  { id: 5, label: 'Cuisine', icon: Home },
  { id: 6, label: 'Salle à manger', icon: Home },
  { id: 7, label: 'Salle de bain', icon: Home },
  { id: 8, label: 'Bureau', icon: Home },
  { id: 9, label: 'Terrasse', icon: Home },
  { id: 10, label: 'Jardin', icon: Home },
  { id: 11, label: 'Hall ou Entrée', icon: Home },
  { id: 12, label: 'Garage', icon: Home },
];

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

import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import type { SvgProps } from 'react-native-svg';

import { Trafic } from '@/assets/icons';
import { StepButtons } from '@/modules/shared';
import { ToggleCard, View } from '@/shared/components';
import useCustomForm from '@/shared/hooks/use-custom-form';

import { CreateAnnouncementStepTwoSchema } from '../schemas';
import type { StepperFormProps } from './choose-speciality';

type FormData = {
  needs: string[];
};
export function ChooseNeeds({
  handlePreviousStep,
  handleNextStep,
  setFormData,
  formData,
}: StepperFormProps) {
  const { handleSubmit, control } = useCustomForm(
    CreateAnnouncementStepTwoSchema,
    { needs: formData?.needs || [] }
  );

  const handleSelectNeeds = (need: string) => {
    const currentNeeds = formData?.needs || [];
    const newSelectedNeeds: string[] = currentNeeds.includes(need)
      ? currentNeeds.filter((item: string) => item !== need)
      : [...currentNeeds, need];

    setFormData({ ...formData, needs: newSelectedNeeds });
  };
  const onSubmit: SubmitHandler<FormData> = (_data) => {
    handleNextStep();
  };
  type NeedsData = {
    id: number;
    label: string;
    icon: React.FunctionComponent<SvgProps>;
    selectedNeeds: string;
  };
  const NeedsData: NeedsData[] = [
    {
      id: 1,
      label: 'Plans permis et suivi chantier',
      icon: Trafic,
      selectedNeeds: 'Chantier',
    },
    {
      id: 2,
      label: 'Plan 3d de décoration extérieur',
      icon: Trafic,
      selectedNeeds: 'interiorArchitect',
    },
    {
      id: 3,
      label: 'Plans et permis de construire',
      icon: Trafic,
      selectedNeeds: 'buildingPermit',
    },
    {
      id: 4,
      label: 'Plan 3d de décoration intérieur',
      icon: Trafic,
      selectedNeeds: 'interiorDesign',
    },
    {
      id: 5,
      label: 'Plans permis et suivi chantier',
      icon: Trafic,
      selectedNeeds: 'constructionArchitect',
    },
    {
      id: 6,
      label: 'Plan 3d de décoration intérieur',
      icon: Trafic,
      selectedNeeds: 'interiorDecoration',
    },
  ];
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
            value={cardData.id.toString()}
            selectedValue={formData?.needs || []}
            onSelect={() => handleSelectNeeds(cardData.id.toString())}
          />
        ))}
      </View>
      <StepButtons
        previous={{ handlePreviousStep, label: 'signup.retour' }}
        next={{
          handleNextStep: handleSubmit(onSubmit),
          label: 'signup.suivant',
        }}
      />
    </View>
  );
}

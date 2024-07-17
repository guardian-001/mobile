import React, { useState } from 'react';
import type { SvgProps } from 'react-native-svg';

import { Trafic } from '@/assets/icons';
import { StepButtons } from '@/modules/shared';
import { ToggleCard, View } from '@/shared/components';
import useCustomForm from '@/shared/hooks/use-custom-form';
import { AnnouncementFormSchema } from '@/validations';

export type StepperFormProps = {
  handlePreviousStep?: () => void;
  handleNextStep?: () => void;
};

export function ChooseNeeds({
  handlePreviousStep,
  handleNextStep,
}: StepperFormProps) {
  const { control } = useCustomForm(AnnouncementFormSchema);

  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const handleSelectNeeds = (need: string) => {
    setSelectedNeeds((prevSelectedNeeds) => {
      if (prevSelectedNeeds.includes(need)) {
        return prevSelectedNeeds.filter((item) => item !== need);
      } else {
        return [...prevSelectedNeeds, need];
      }
    });
  };
  type NeedsData = {
    title: string;
    svgComponent: React.FunctionComponent<SvgProps>;
    selectedNeeds: string;
  };
  const NeedsData: NeedsData[] = [
    {
      title: 'Plans permis et suivi chantier',
      svgComponent: Trafic,
      selectedNeeds: 'Chantier',
    },
    {
      title: 'Plan 3d de décoration extérieur',
      svgComponent: Trafic,
      selectedNeeds: 'interiorArchitect',
    },
    {
      title: 'Plans et permis de construire',
      svgComponent: Trafic,
      selectedNeeds: 'buildingPermit',
    },
    {
      title: 'Plan 3d de décoration intérieur',
      svgComponent: Trafic,
      selectedNeeds: 'interiorDesign',
    },
    {
      title: 'Plans permis et suivi chantier',
      svgComponent: Trafic,
      selectedNeeds: 'constructionArchitect',
    },
    {
      title: 'Plan 3d de décoration intérieur',
      svgComponent: Trafic,
      selectedNeeds: 'interiorDecoration',
    },
  ];
  return (
    <View className="flex flex-1 justify-between pt-4">
      <View>
        {NeedsData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className="mb-4 flex h-16  w-full flex-row rounded-lg"
            title={cardData.title}
            svgComponent={cardData.svgComponent}
            name="needs"
            control={control}
            isSelected={selectedNeeds.includes(cardData.selectedNeeds)}
            onSelect={() => handleSelectNeeds(cardData.selectedNeeds)}
          />
        ))}
      </View>
      <StepButtons
        previous={{ handlePreviousStep, label: 'signup.retour' }}
        next={{ handleNextStep, label: 'signup.suivant' }}
      />
    </View>
  );
}

import React, { useState } from 'react';
import type { SvgProps } from 'react-native-svg';

import { Trafic } from '@/assets/icons';
import type { TxKeyPath } from '@/core';
import { translate } from '@/core';
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

  const [selectedSpeciality, setSelectedSpeciality] = useState<string | null>(
    null
  );
  const handleSelectSpeciality = (speciality: string) => {
    setSelectedSpeciality(speciality);
  };
  type NeedsData = {
    title: TxKeyPath;
    svgComponent: React.FunctionComponent<SvgProps>;
    selectedSpeciality: string;
  };
  const NeedsData: NeedsData[] = [
    {
      title: 'announcement.constructionArchitect',
      svgComponent: Trafic,
      selectedSpeciality: 'constructionArchitect',
    },
    {
      title: 'announcement.interiorDesigners',
      svgComponent: Trafic,
      selectedSpeciality: 'interiorArchitect',
    },
    {
      title: 'announcement.interiorDesigners',
      svgComponent: Trafic,
      selectedSpeciality: 'interiorArchitect',
    },
    {
      title: 'announcement.interiorDesigners',
      svgComponent: Trafic,
      selectedSpeciality: 'interiorArchitect',
    },
    {
      title: 'announcement.interiorDesigners',
      svgComponent: Trafic,
      selectedSpeciality: 'interiorArchitect',
    },
    {
      title: 'announcement.interiorDesigners',
      svgComponent: Trafic,
      selectedSpeciality: 'interiorArchitect',
    },
  ];
  return (
    <View className="flex flex-1 justify-between pt-4">
      <View>
        {NeedsData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className="mb-4 flex h-16  w-full flex-row rounded-lg"
            title={translate(cardData.title)}
            svgComponent={cardData.svgComponent}
            name="speciality"
            control={control}
            isSelected={selectedSpeciality === cardData.selectedSpeciality}
            onSelect={() => handleSelectSpeciality(cardData.selectedSpeciality)}
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

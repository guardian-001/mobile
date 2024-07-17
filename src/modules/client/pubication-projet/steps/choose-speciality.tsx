import React, { useState } from 'react';
import type { SvgProps } from 'react-native-svg';

import { HouseModel, InteriorHouseModel } from '@/assets/icons/archimatch';
import type { TxKeyPath } from '@/core';
import { translate } from '@/core';
import StepperButton from '@/modules/shared/stepper-button';
import { ToggleCard, View } from '@/shared/components';
import useCustomForm from '@/shared/hooks/use-custom-form';
import { AnnouncementFormSchema } from '@/validations';

type SpecialityFormProps = {
  handleNextStep?: () => void;
};

export function ChooseSpeciality({ handleNextStep }: SpecialityFormProps) {
  const { control } = useCustomForm(AnnouncementFormSchema);

  const [selectedSpeciality, setSelectedSpeciality] = useState<string | null>(
    null
  );
  const handleSelectSpeciality = (speciality: string) => {
    setSelectedSpeciality(speciality);
  };
  type ToggleCardData = {
    title: TxKeyPath;
    svgComponent: React.FunctionComponent<SvgProps>;
    selectedSpeciality: string;
  };
  const toggleCardData: ToggleCardData[] = [
    {
      title: 'announcement.constructionArchitect',
      svgComponent: HouseModel,
      selectedSpeciality: 'constructionArchitect',
    },
    {
      title: 'announcement.interiorDesigners',
      svgComponent: InteriorHouseModel,
      selectedSpeciality: 'interiorArchitect',
    },
  ];
  return (
    <View className="flex flex-1 items-center justify-between pt-8">
      <View className="h-3/4">
        {toggleCardData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className="mb-7 h-40 w-64 rounded-2xl"
            title={translate(cardData.title)}
            svgComponent={cardData.svgComponent}
            name="speciality"
            control={control}
            isSelected={selectedSpeciality === cardData.selectedSpeciality}
            onSelect={() => handleSelectSpeciality(cardData.selectedSpeciality)}
            classNameText="my-3"
          />
        ))}
      </View>
      <StepperButton
        onPressHandler={handleNextStep}
        label={translate('signup.suivant')}
      />
    </View>
  );
}

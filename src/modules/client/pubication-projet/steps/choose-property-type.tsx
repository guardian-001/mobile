import React, { useState } from 'react';
import type { SvgProps } from 'react-native-svg';

import { Home } from '@/assets/icons';
import { StepButtons } from '@/modules/shared';
import { ToggleCard, View } from '@/shared/components';
import useCustomForm from '@/shared/hooks/use-custom-form';
import { AnnouncementFormSchema } from '@/validations';

import type { StepperFormProps } from './choose-needs';

export function ChoosePropertyType({
  handlePreviousStep,
  handleNextStep,
}: StepperFormProps) {
  const { control } = useCustomForm(AnnouncementFormSchema);

  const [selectedProperty, setSelectedProperty] = useState<string[]>([]);
  const handleSelectProperty = (property: string) => {
    setSelectedProperty((prevSelectedProperty) => {
      if (prevSelectedProperty.includes(property)) {
        return [];
      } else {
        return [property];
      }
    });
  };

  type PropertyData = {
    title: string;
    svgComponent: React.FunctionComponent<SvgProps>;
    selectedProperty: string;
  };

  const PropertyData: PropertyData[] = [
    {
      title: 'Maison',
      svgComponent: Home,
      selectedProperty: 'Maison',
    },
    {
      title: 'Villa',
      svgComponent: Home,
      selectedProperty: 'Villa',
    },
    {
      title: 'Appartement',
      svgComponent: Home,
      selectedProperty: 'Appartement',
    },
    {
      title: 'Immobilier',
      svgComponent: Home,
      selectedProperty: 'Immobilier',
    },
  ];

  return (
    <View className="flex flex-1 justify-between pt-8">
      <View>
        {PropertyData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className="mb-4 flex h-16 w-full flex-row-reverse justify-between rounded-lg pl-8 pr-0"
            title={cardData.title}
            svgComponent={cardData.svgComponent}
            name="properties"
            control={control}
            isSelected={selectedProperty.includes(cardData.selectedProperty)}
            onSelect={() => handleSelectProperty(cardData.selectedProperty)}
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

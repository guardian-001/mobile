import React, { useState } from 'react';
import type { SvgProps } from 'react-native-svg';

import { Home } from '@/assets/icons';
import { StepButtons } from '@/modules/shared';
import { ToggleCard, View } from '@/shared/components';
import useCustomForm from '@/shared/hooks/use-custom-form';
import { AnnouncementFormSchema } from '@/validations';

import type { StepperFormProps } from './choose-needs';

export function ChooseCategory({
  handlePreviousStep,
  handleNextStep,
}: StepperFormProps) {
  const { control } = useCustomForm(AnnouncementFormSchema);

  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const handleSelectCategory = (category: string) => {
    setSelectedCategory((prevSelectedCategory) => {
      if (prevSelectedCategory.includes(category)) {
        return [];
      } else {
        return [category];
      }
    });
  };

  type CategoryData = {
    title: string;
    svgComponent: React.FunctionComponent<SvgProps>;
    selectedCategory: string;
  };

  const CategoryData: CategoryData[] = [
    {
      title: 'Construction logement',
      svgComponent: Home,
      selectedCategory: 'Construction logement',
    },
    {
      title: 'Point vente et commercial',
      svgComponent: Home,
      selectedCategory: 'Point vente et commercial',
    },
    {
      title: 'Grand oeuvre immobilier',
      svgComponent: Home,
      selectedCategory: 'Grand oeuvre immobilier',
    },
    {
      title: 'Industrielle',
      svgComponent: Home,
      selectedCategory: 'Industrielle',
    },
  ];

  return (
    <View className="flex flex-1 justify-between pt-8">
      <View className="flex flex-row flex-wrap gap-4">
        {CategoryData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className="min-h-[150px] min-w-[150px] rounded-lg"
            title={cardData.title}
            svgComponent={cardData.svgComponent}
            name="categories"
            control={control}
            isSelected={selectedCategory.includes(cardData.selectedCategory)}
            onSelect={() => handleSelectCategory(cardData.selectedCategory)}
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

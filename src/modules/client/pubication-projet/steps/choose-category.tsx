import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import type { SvgProps } from 'react-native-svg';

import { Home } from '@/assets/icons';
import { StepButtons } from '@/modules/shared';
import { ToggleCard, View } from '@/shared/components';
import useCustomForm from '@/shared/hooks/use-custom-form';

import { CreateAnnouncementStepThreeSchema } from '../schemas';
import type { StepperFormProps } from './choose-speciality';
type FormData = {
  projectCategory: string;
};
export function ChooseCategory({
  handlePreviousStep,
  handleNextStep,
  setFormData,
  formData,
}: StepperFormProps) {
  const { handleSubmit, control } = useCustomForm(
    CreateAnnouncementStepThreeSchema,
    { projectCategory: formData?.projectCategory }
  );

  const handleSelectCategory = (projectCategory: string) => {
    setFormData({ ...formData, projectCategory });
  };
  const onSubmit: SubmitHandler<FormData> = (_data) => {
    handleNextStep();
  };
  type CategoryData = {
    id: number;
    label: string;
    icon: React.FunctionComponent<SvgProps>;
    selectedCategory: string;
  };

  const CategoryData: CategoryData[] = [
    {
      id: 1,
      label: 'Construction logement',
      icon: Home,
      selectedCategory: 'Construction logement',
    },
    {
      id: 2,
      label: 'Point vente et commercial',
      icon: Home,
      selectedCategory: 'Point vente et commercial',
    },
    {
      id: 3,
      label: 'Grand oeuvre immobilier',
      icon: Home,
      selectedCategory: 'Grand oeuvre immobilier',
    },
    {
      id: 4,
      label: 'Industrielle',
      icon: Home,
      selectedCategory: 'Industrielle',
    },
  ];

  return (
    <View className="flex flex-1 justify-between pt-8">
      <View className="flex flex-row flex-wrap gap-4">
        {CategoryData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className="rounded-lg"
            containerClassName="min-h-[25%] min-w-[40%] max-w-[47%] max-h-[50%]"
            title={cardData.label}
            svgComponent={cardData.icon}
            name="projectCategory"
            control={control}
            value={cardData.id.toString()}
            selectedValue={formData?.projectCategory}
            onSelect={() => handleSelectCategory(cardData.id.toString())}
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

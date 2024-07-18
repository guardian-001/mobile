import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import type { SvgProps } from 'react-native-svg';

import { Home } from '@/assets/icons';
import { StepButtons } from '@/modules/shared';
import { ToggleCard, View } from '@/shared/components';
import useCustomForm from '@/shared/hooks/use-custom-form';

import { CreateAnnouncementStepFourSchema } from '../schemas';
import type { StepperFormProps } from './choose-speciality';

type FormData = {
  propertyType: string;
};
export function ChoosePropertyType({
  handlePreviousStep,
  handleNextStep,
  setFormData,
  formData,
}: StepperFormProps) {
  const { handleSubmit, control } = useCustomForm(
    CreateAnnouncementStepFourSchema,
    { propertyType: formData?.propertyType }
  );

  const handleSelectProperty = (propertyType: string) => {
    setFormData({ ...formData, propertyType });
  };
  const onSubmit: SubmitHandler<FormData> = (_data) => {
    handleNextStep();
  };
  type PropertyData = {
    id: number;
    label: string;
    icon: React.FunctionComponent<SvgProps>;
    selectedProperty: string;
  };

  const PropertyData: PropertyData[] = [
    { id: 1, label: 'Maison', icon: Home, selectedProperty: 'Maison' },
    { id: 2, label: 'Villa', icon: Home, selectedProperty: 'Villa' },
    {
      id: 3,
      label: 'Appartement',
      icon: Home,
      selectedProperty: 'Appartement',
    },
    { id: 4, label: 'Immobilier', icon: Home, selectedProperty: 'Immobilier' },
  ];

  return (
    <View className="flex flex-1 justify-between pt-8">
      <View className="gap-4">
        {PropertyData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className="flex h-16 w-full flex-row-reverse justify-between rounded-lg pl-8 pr-0"
            title={cardData.label}
            svgComponent={cardData.icon}
            name="propertyType"
            control={control}
            value={cardData.id.toString()}
            selectedValue={formData?.propertyType}
            onSelect={() => handleSelectProperty(cardData.id.toString())}
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

import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import type { SvgProps } from 'react-native-svg';

import { Home } from '@/assets/icons';
import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { StepButtons } from '@/modules/shared';
import { Text, ToggleCard, View } from '@/shared/components';

import { CreateAnnouncementStepTenSchema } from '../schemas';
import type { StepperFormProps } from './choose-speciality';

type FormData = {
  projectExtensions: string[];
};

export function ChooseAdditionalInfo({
  handlePreviousStep,
  handleNextStep,
  setFormData,
  formData,
}: StepperFormProps) {
  const { handleSubmit, control, errors } = useCustomForm(
    CreateAnnouncementStepTenSchema,
    { projectExtensions: formData?.projectExtensions || [] }
  );

  const handleSelectExtensions = (Extension: string) => {
    const currentExtensions = formData?.projectExtensions || [];
    const newSelectedExtensions: string[] = currentExtensions.includes(
      Extension
    )
      ? currentExtensions.filter((item: string) => item !== Extension)
      : [...currentExtensions, Extension];

    setFormData({ ...formData, projectExtensions: newSelectedExtensions });
  };
  const onSubmit: SubmitHandler<FormData> = () => {
    handleNextStep();
  };

  type ExtensionsData = {
    id: number;
    label: string;
    icon: React.FunctionComponent<SvgProps>;
  };

  const ExtensionsData: ExtensionsData[] = [
    { id: 1, label: 'Ascenseur', icon: Home },
    { id: 2, label: 'Escaliers', icon: Home },
    { id: 3, label: 'Salle de cinéma', icon: Home },
    { id: 4, label: 'Salle de jeux', icon: Home },
    { id: 5, label: 'Cave à cigares', icon: Home },
    { id: 6, label: 'Salles de réunion', icon: Home },
    { id: 7, label: 'Salles de fête', icon: Home },
    { id: 8, label: 'Bibliothèques', icon: Home },
    { id: 9, label: 'Espaces de collaboration', icon: Home },
    { id: 10, label: 'Aires', icon: Home },
    { id: 11, label: 'Bureaux', icon: Home },
    { id: 12, label: 'Salles de conférence', icon: Home },
    { id: 13, label: 'Salles de classe', icon: Home },
    { id: 14, label: 'Salles de réception', icon: Home },
  ];
  const error = errors?.projectExtensions?.message as TxKeyPath | undefined;
  return (
    <View className="flex flex-1 justify-between pt-4">
      <View className="flex flex-1  flex-wrap gap-4 px-1">
        {ExtensionsData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className="flex flex-row-reverse !justify-end rounded-lg"
            containerClassName="h-8 min-h-[15%] max-h-[17%] min-w-[45%] max-w-[47%]"
            classNameText="w-3/5"
            title={cardData.label}
            svgComponent={cardData.icon}
            name="projectExtensions"
            control={control}
            multi={true}
            value={cardData.id.toString()}
            selectedValue={formData?.projectExtensions || []}
            onSelect={() => handleSelectExtensions(cardData.id.toString())}
            showError={false}
          />
        ))}
      </View>
      {error && (
        <Text className="text-sm text-error dark:text-error" tx={error} />
      )}
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

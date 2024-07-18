import React from 'react';

import { HouseModel, InteriorHouseModel } from '@/assets/icons/archimatch';
import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import { ScrollView, Text, ToggleCard, View } from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';
import { useFormStepper } from '@/shared/providers/use-signup-stepper-provider';
import { SpecialityFormSchema } from '@/validations';

export type ResetFormProps = {
  handlePreviousStep: () => void;
  handleNextStep: () => void;
};

export type FormData = {
  architectSpeciality: string;
};

export default function ChooseSpeciality({
  handlePreviousStep,
  handleNextStep,
}: ResetFormProps) {
  const { setFormData, formData } = useFormStepper();
  const { control, handleSubmit } = useCustomForm(SpecialityFormSchema, {
    architectSpeciality: '',
  });

  const handleSelectSpeciality = (speciality: number) => {
    setFormData((prev: any) => ({ ...prev, architectSpeciality: speciality }));
  };

  const onSubmit = () => {
    handleNextStep();
  };

  return (
    <View className="flex h-fit items-center justify-between gap-16">
      <View>
        <Text
          tx={'signupStepSpeciality.title'}
          className="mb-2 text-center text-2xl font-extrabold"
        />
        <Text
          tx={'signupStepSpeciality.description'}
          className="max-w-xs text-center text-sm text-description"
        />
      </View>

      <ScrollView className="flex h-fit gap-5">
        <ToggleCard
          className="h-38 w-64 rounded-2xl"
          title={translate('signupStepSpeciality.constructionArchitect')}
          svgComponent={HouseModel}
          name="architectSpeciality"
          control={control}
          id={1}
          selectedValue={formData?.architectSpeciality}
          onSelect={() => handleSelectSpeciality(1)}
        />

        <ToggleCard
          className="h-38 w-64 rounded-2xl"
          title={translate('signupStepSpeciality.interiorArchitect')}
          svgComponent={InteriorHouseModel}
          name="architectSpeciality"
          control={control}
          id={2}
          selectedValue={formData?.architectSpeciality}
          onSelect={() => handleSelectSpeciality(2)}
        />
      </ScrollView>
      <StepButtons
        previous={{ handlePreviousStep, label: 'signup.ignorer' }}
        next={{ handleSubmit: handleSubmit(onSubmit), label: 'signup.suivant' }}
      />
    </View>
  );
}

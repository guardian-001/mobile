import React, { useState } from 'react';

import { HouseModel, InteriorHouseModel } from '@/assets/icons/archimatch';
import { translate } from '@/core';
import StepperButton from '@/modules/shared/stepper-button';
import { ScrollView, Text, ToggleCard, View } from '@/shared/components';
import useCustomForm from '@/shared/hooks/use-custom-form';
import { SignupFormSchema } from '@/validations';

export type ResetFormProps = {
  onSubmit?: () => void;
};

export default function ChooseSpeciality({ onSubmit }: ResetFormProps) {
  const { control } = useCustomForm(SignupFormSchema, {
    speciality: 'speciality',
  });

  const [selectedSpeciality, setSelectedSpeciality] = useState<string | null>(
    null
  );

  const handleSelectSpeciality = (speciality: string) => {
    setSelectedSpeciality(speciality);
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

      <ScrollView className=" flex h-fit gap-5">
        <ToggleCard
          className="h-38 w-64 rounded-2xl"
          title={translate('signupStepSpeciality.constructionArchitect')}
          svgComponent={HouseModel}
          name="speciality"
          control={control}
          isSelected={selectedSpeciality === 'constructionArchitect'}
          onSelect={() => handleSelectSpeciality('constructionArchitect')}
        />

        <ToggleCard
          className="h-38 w-64 rounded-2xl"
          title={translate('signupStepSpeciality.interiorArchitect')}
          svgComponent={InteriorHouseModel}
          name="speciality"
          control={control}
          isSelected={selectedSpeciality === 'interiorArchitect'}
          onSelect={() => handleSelectSpeciality('interiorArchitect')}
        />
      </ScrollView>
      <View className="flex flex-row  gap-2">
        <StepperButton
          width="w-[45%]"
          alternativeBg="bg-secondary-btn"
          alternativeTextStyle="color-primary-txt"
          label={translate('signup.ignorer')}
        />

        <StepperButton
          width="w-[45%]"
          onPressHandler={onSubmit}
          label={translate('signup.suivant')}
        />
      </View>
    </View>
  );
}

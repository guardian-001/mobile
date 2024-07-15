import React, { useState } from 'react';

import { HouseModel, InteriorHouseModel } from '@/assets/icons/archimatch';
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

  return (
    <View className="flex flex-1 items-center justify-between pt-8">
      <View className="h-3/4">
        <ToggleCard
          className="h-38 w-64 rounded-2xl"
          title={translate('announcement.constructionArchitect')}
          svgComponent={HouseModel}
          name="speciality"
          control={control}
          isSelected={selectedSpeciality === 'constructionArchitect'}
          onSelect={() => handleSelectSpeciality('constructionArchitect')}
        />
        <ToggleCard
          className="h-38 w-64 rounded-2xl"
          title={translate('announcement.interiorDesigners')}
          svgComponent={InteriorHouseModel}
          name="speciality"
          control={control}
          isSelected={selectedSpeciality === 'interiorArchitect'}
          onSelect={() => handleSelectSpeciality('interiorArchitect')}
        />
      </View>
      <StepperButton
        onPressHandler={handleNextStep}
        label={translate('signup.suivant')}
      />
    </View>
  );
}

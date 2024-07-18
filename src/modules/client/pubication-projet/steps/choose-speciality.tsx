import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import type { SvgProps } from 'react-native-svg';

import { HouseModel, InteriorHouseModel } from '@/assets/icons/archimatch';
import { translate } from '@/core';
import { StepperButton } from '@/modules/shared';
import { ToggleCard, View } from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';

import { CreateAnnouncementStepOneSchema } from '../schemas';

type FormData = {
  architectSpeciality: string;
};
export type StepperFormProps = {
  handlePreviousStep: () => void;
  handleNextStep: () => void;
  setFormData: (data: any) => void;
  formData: any;
};

export function ChooseSpeciality({
  handleNextStep,
  setFormData,
  formData,
}: StepperFormProps) {
  const { handleSubmit, control } = useCustomForm(
    CreateAnnouncementStepOneSchema,
    { architectSpeciality: formData?.architectSpeciality }
  );
  const handleSelectSpeciality = (architectSpeciality: string) => {
    setFormData({ ...formData, architectSpeciality });
  };
  const onSubmit: SubmitHandler<FormData> = (_data) => {
    handleNextStep();
  };
  type ToggleCardData = {
    id: number;
    label: string;
    icon: React.FunctionComponent<SvgProps>;
    selectedSpeciality: string;
  };
  const toggleCardData: ToggleCardData[] = [
    {
      id: 1,
      label: 'Architecte de construction	',
      icon: HouseModel,
      selectedSpeciality: 'constructionArchitect',
    },
    {
      id: 2,
      label: "Designer d'interieur",
      icon: InteriorHouseModel,
      selectedSpeciality: 'interiorArchitect',
    },
    {
      id: 3,
      label: 'Artisan de construction',
      icon: InteriorHouseModel,
      selectedSpeciality: 'Artisan de construction',
    },
  ];
  return (
    <View className="flex flex-1 items-center justify-between pt-4">
      <View className="h-[85%] gap-4">
        {toggleCardData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className=" h-40 w-64 rounded-2xl"
            title={cardData.label}
            svgComponent={cardData.icon}
            name="architectSpeciality"
            control={control}
            value={cardData.id.toString()}
            selectedValue={formData?.architectSpeciality}
            onSelect={() => handleSelectSpeciality(cardData.id.toString())}
            classNameText="my-3"
          />
        ))}
      </View>
      <StepperButton
        onPressHandler={handleSubmit(onSubmit)}
        label={translate('signup.suivant')}
      />
    </View>
  );
}

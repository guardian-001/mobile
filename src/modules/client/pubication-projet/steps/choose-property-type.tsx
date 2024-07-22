import React from 'react';
import type { SvgProps } from 'react-native-svg';

import { Home } from '@/assets/icons';
import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { StepButtons } from '@/modules/shared';
import { Text, ToggleCard, View } from '@/shared/components';
import type { AnnouncementType } from '@/types/announcement';

import { CreateAnnouncementStepFourSchema } from '../schemas';
import type { StepperFormProps } from './choose-speciality';

export function ChoosePropertyType({
  onHandleBack,
  onHandleNext,
  setFormData,
  formData,
}: StepperFormProps) {
  const { handleSubmit, control, errors } = useCustomForm(
    CreateAnnouncementStepFourSchema,
    { propertyType: formData?.propertyType }
  );

  type propertyTypeFormType = Pick<AnnouncementType, 'propertyType'>;
  const onSubmit = (data: propertyTypeFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };
  type PropertyData = {
    id: number;
    label: string;
    icon: React.FunctionComponent<SvgProps>;
  };

  const PropertyData: PropertyData[] = [
    { id: 1, label: 'Maison', icon: Home },
    { id: 2, label: 'Villa', icon: Home },
    { id: 3, label: 'Appartement', icon: Home },
    { id: 4, label: 'Immobilier', icon: Home },
  ];
  const error = errors?.propertyType?.message as TxKeyPath | undefined;

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
            value={cardData.id}
          />
        ))}
        {error && (
          <Text className="text-sm text-error dark:text-error" tx={error} />
        )}
      </View>
      <StepButtons
        previous={{ handlePreviousStep: onHandleBack, label: 'signup.retour' }}
        next={{
          handleSubmit: handleSubmit(onSubmit),
          label: 'signup.suivant',
        }}
      />
    </View>
  );
}

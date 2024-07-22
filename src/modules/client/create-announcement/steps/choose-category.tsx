import React from 'react';
import type { SvgProps } from 'react-native-svg';

import { Home } from '@/assets/icons';
import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { StepButtons } from '@/modules/shared';
import { Text, ToggleCard, View } from '@/shared/components';
import type { StepperFormProps } from '@/types';
import type { AnnouncementType } from '@/types/announcement';

import { CreateAnnouncementStepThreeSchema } from '../schemas';

type CategoryData = {
  id: number;
  label: string;
  icon: React.FunctionComponent<SvgProps>;
};

const CategoryData: CategoryData[] = [
  {
    id: 1,
    label: 'Construction logement',
    icon: Home,
  },
  {
    id: 2,
    label: 'Point vente et commercial',
    icon: Home,
  },
  {
    id: 3,
    label: 'Grand oeuvre immobilier',
    icon: Home,
  },
  {
    id: 4,
    label: 'Industrielle',
    icon: Home,
  },
];

export function ChooseCategory({
  onHandleBack,
  onHandleNext,
  setFormData,
  formData,
}: StepperFormProps) {
  const { handleSubmit, control, errors } = useCustomForm(
    CreateAnnouncementStepThreeSchema,
    { projectCategory: formData?.projectCategory }
  );

  type projectCategoryFormType = Pick<AnnouncementType, 'projectCategory'>;
  const onSubmit = (data: projectCategoryFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };

  const error = errors?.projectCategory?.message as TxKeyPath | undefined;
  return (
    <View className="flex flex-1 justify-between pt-8">
      <View className="flex flex-row flex-wrap gap-4">
        {CategoryData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className="w-full rounded-lg"
            containerClassName="min-h-[25%] min-w-[40%] max-w-[47%] max-h-[50%]"
            title={cardData.label}
            svgComponent={cardData.icon}
            name="projectCategory"
            control={control}
            value={cardData.id}
          />
        ))}
      </View>
      {error && (
        <Text className="text-sm text-error dark:text-error" tx={error} />
      )}
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

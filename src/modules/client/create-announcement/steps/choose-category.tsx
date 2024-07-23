import React from 'react';

import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { StepButtons } from '@/modules/shared';
import { Text, ToggleCard, View } from '@/shared/components';
import { useFormStepper } from '@/shared/providers';
import type { AnnouncementType } from '@/types/announcement';

import { CategoryData } from '../dump-data';
import { CreateAnnouncementStepThreeSchema } from '../schemas';

export function ChooseCategory() {
  const { onHandleBack, onHandleNext, setFormData, formData } =
    useFormStepper<AnnouncementType>();
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

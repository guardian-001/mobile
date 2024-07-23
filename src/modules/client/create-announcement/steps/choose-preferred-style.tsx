import React from 'react';

import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { StepButtons } from '@/modules/shared';
import { Text, ToggleCard, View } from '@/shared/components';
import { useFormStepper } from '@/shared/providers';
import type { AnnouncementType } from '@/types/announcement';

import { PreferredStyleData } from '../dump-data';
import { CreateAnnouncementStepNineSchema } from '../schemas';

export function ChoosePreferredStyle() {
  const { onHandleBack, onHandleNext, setFormData, formData } =
    useFormStepper<AnnouncementType>();
  const { handleSubmit, control, errors } = useCustomForm(
    CreateAnnouncementStepNineSchema,
    { architecturalStyle: formData?.architecturalStyle }
  );

  type architecturalStyleFormType = Pick<
    AnnouncementType,
    'architecturalStyle'
  >;
  const onSubmit = (data: architecturalStyleFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };

  const error = errors?.architecturalStyle?.message as TxKeyPath | undefined;
  return (
    <View className="flex flex-1 justify-between pt-8">
      <View className=" gap-4">
        {PreferredStyleData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className="h-16 w-full !items-start rounded-lg"
            title={cardData.label}
            name="architecturalStyle"
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

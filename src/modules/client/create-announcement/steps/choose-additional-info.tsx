import React from 'react';

import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { StepButtons } from '@/modules/shared';
import { Text, ToggleCard, View } from '@/shared/components';
import { useFormStepper } from '@/shared/providers/use-form-stepper-provider';
import type { AnnouncementType } from '@/types/announcement';

import { ExtensionsData } from '../dump-data';
import { CreateAnnouncementStepTenSchema } from '../schemas';

export function ChooseAdditionalInfo() {
  const { onHandleBack, onHandleNext, setFormData, formData } =
    useFormStepper<AnnouncementType>();
  const { handleSubmit, control, errors } = useCustomForm(
    CreateAnnouncementStepTenSchema,
    { projectExtensions: formData?.projectExtensions || [] }
  );

  type projectExtensionsFormType = Pick<AnnouncementType, 'projectExtensions'>;
  const onSubmit = (data: projectExtensionsFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };

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

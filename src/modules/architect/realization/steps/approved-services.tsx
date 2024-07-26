import React from 'react';
import { View } from 'react-native';

import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { StepButtons } from '@/modules/shared';
import { useFormStepper } from '@/shared';
import { Text } from '@/shared/components';

import { ProjectRealizationSchema } from '../schemas';
import type { ProjectRealizationType } from '../types';

export function ApprovedServices() {
  type ServicesFormType = Pick<ProjectRealizationType, 'needs'>;
  const { formData, setFormData, onHandleNext, onHandleBack } =
    useFormStepper<ProjectRealizationType>();
  const {
    handleSubmit,
    // control,
    errors,
  } = useCustomForm(ProjectRealizationSchema, {
    needs: formData.needs,
  });
  // const { data, isPending, isError } = useNeedsApi({id:});
  console.log(formData);
  const onSubmit = (data: ServicesFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };
  const error = errors?.needs?.message as TxKeyPath | undefined;

  return (
    <View className="mb-5 flex h-full flex-1 items-start justify-between gap-16  ">
      <View>
        <Text
          tx={'realisation.servicesStep.title'}
          className="mb-2 text-center text-2xl font-extrabold"
        />
        <Text
          tx={'realisation.servicesStep.description'}
          className="max-w-xs text-center text-sm text-description"
        />
      </View>
      <View className="gap-4">
        {/* {NeedsData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className="flex h-16  w-full flex-row rounded-lg"
            title={cardData.label}
            svgComponent={cardData.icon}
            name="needs"
            control={control}
            multi={true}
            value={cardData.id}
          />
        ))} */}
        {error && (
          <Text className="text-sm text-error dark:text-error" tx={error} />
        )}
      </View>
      <StepButtons
        previous={{ handlePreviousStep: onHandleBack, label: 'signup.ignorer' }}
        next={{ handleSubmit: handleSubmit(onSubmit), label: 'signup.suivant' }}
      />
    </View>
  );
}

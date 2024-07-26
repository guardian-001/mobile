import React from 'react';

import { type TxKeyPath } from '@/core';
import { StepButtons } from '@/modules/shared';
import { Text, View } from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';
import { useFormStepper } from '@/shared/providers';

import { ProjectRealizationSchema } from '../schemas';
import type { ProjectRealizationType } from '../types';

export function ProjectGallery() {
  type DetailsFormType = Pick<ProjectRealizationType, 'realizationImages'>;
  const { formData, setFormData, onHandleNext, onHandleBack } =
    useFormStepper<ProjectRealizationType>();
  const {
    handleSubmit,
    // control,
    errors,
  } = useCustomForm(ProjectRealizationSchema, {
    projectName: formData.realizationImages,
  });

  const onSubmit = (data: DetailsFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };

  const error = errors.realizationImages?.message as TxKeyPath | undefined;
  return (
    <View className="mb-5 flex h-full w-full flex-1 items-start justify-between gap-6  ">
      <View className="mb-2">
        <Text
          tx={'realisation.galleryStep.title'}
          className="mb-2 text-start text-2xl font-extrabold"
        />
        <Text
          tx={'realisation.galleryStep.description'}
          className="max-w-xs text-start text-sm text-description"
        />
      </View>

      <View className="flex h-fit w-full items-center ">
        <Text className="w-11/12 text-left text-sm text-error">{error}</Text>
        <StepButtons
          previous={{
            handlePreviousStep: onHandleBack,
            label: 'signup.retour',
          }}
          next={{
            handleSubmit: handleSubmit(onSubmit),
            label: 'signup.suivant',
          }}
        />
      </View>
    </View>
  );
}

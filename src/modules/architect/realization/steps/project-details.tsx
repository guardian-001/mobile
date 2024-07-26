import { first } from 'lodash';
import React, { useEffect } from 'react';

import type { TxKeyPath } from '@/core';
import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import {
  ControlledInput,
  ScrollView,
  TagGroup,
  Text,
  View,
} from '@/shared/components';
import { VALID_CITIES, VALID_WORK_SURFACES } from '@/shared/constants';
import { useCustomForm } from '@/shared/hooks';
import { useFormStepper } from '@/shared/providers';

import { ProjectDetailsSchema } from '../../schemas';
import type { ProjectRealizationType } from '../types';

export function ProjectDetails() {
  type DetailsFormType = Pick<
    ProjectRealizationType,
    'projectName' | 'city' | 'workSurface' | 'description'
  >;
  const { formData, setFormData, onHandleNext, onHandleBack } =
    useFormStepper<ProjectRealizationType>();
  const { handleSubmit, control, errors } = useCustomForm(
    ProjectDetailsSchema,
    {
      projectName: formData?.projectName,
      city: formData?.city,
      workSurface: formData?.workSurface,
      description: formData?.description,
    }
  );

  useEffect(() => {
    console.log(errors);
  });
  const onSubmit = (data: DetailsFormType) => {
    console.log(data);
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };
  // const projectNameError = errors.description?.message as TxKeyPath | undefined;
  console.log(first);
  const errorCity = errors.city?.message as TxKeyPath | undefined;
  const errorWorkSurface = errors.workSurface?.message as TxKeyPath | undefined;

  return (
    <View className="mb-5 flex h-full flex-1 items-start justify-between gap-5  ">
      <View>
        <Text
          tx={'realisation.categoryStep.title'}
          className="mb-2 text-start text-2xl font-extrabold"
        />
        <Text
          tx={'realisation.categoryStep.description'}
          className="max-w-xs text-start text-sm text-description"
        />
      </View>
      <ScrollView className="flex gap-4" showsVerticalScrollIndicator={false}>
        <ControlledInput
          required={true}
          control={control}
          name="projectName"
          labelStyle="mb-1 text-base font-bold"
          label={translate('realisation.detailsStep.inputLabel')}
          placeholder={translate('realisation.detailsStep.inputPlaceholder')}
        />
        <TagGroup
          name="city"
          control={control}
          tags={[...VALID_CITIES]}
          label="realisation.detailsStep.localisationLabel"
          error={errorCity}
          required={true}
        />

        <TagGroup
          name="workSurface"
          control={control}
          tags={[...VALID_WORK_SURFACES]}
          label="realisation.detailsStep.surfaceLabel"
          error={errorWorkSurface}
          required={true}
        />
        <ControlledInput
          required={true}
          control={control}
          name="description"
          labelStyle="mb-1 text-base font-bold"
          className="mb-7 h-40 align-text-top"
          inputAreaType="textArea"
          label={translate('realisation.detailsStep.descriptionLabel')}
          placeholder={translate(
            'realisation.detailsStep.descriptionPlaceholder'
          )}
        />
      </ScrollView>
      <View className="flex h-fit w-full items-center">
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

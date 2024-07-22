import React from 'react';

import { StepButtons } from '@/modules/shared';
import { Text, View } from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';
import { useFormStepper } from '@/shared/providers/use-form-stepper-provider';

import { ProjectRealizationSchema } from '../schemas';
import type { ProjectRealizationType } from '../types';

export default function ProjectGallery() {
  type DetailsFormType = Pick<ProjectRealizationType, 'realizationImages'>;
  const { formData, setFormData, onHandleNext, onHandleBack } =
    useFormStepper<ProjectRealizationType>();
  const {
    handleSubmit,
    // control,
    // errors
  } = useCustomForm(ProjectRealizationSchema, {
    projectName: formData.projectName,
    city: formData.city,
    workSurface: formData.workSurface,
    description: formData.description,
  });

  const onSubmit = (data: DetailsFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };
  // const error = errors.architectSpeciality?.message as TxKeyPath | undefined;
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

      <StepButtons
        previous={{ handlePreviousStep: onHandleBack, label: 'signup.ignorer' }}
        next={{ handleSubmit: handleSubmit(onSubmit), label: 'signup.suivant' }}
      />
    </View>
  );
}

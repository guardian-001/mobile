import { useRouter } from 'expo-router';
import React from 'react';

import { HouseModel, InteriorHouseModel } from '@/assets/icons/archimatch';
import type { TxKeyPath } from '@/core';
import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import { ScrollView, Text, ToggleCard, View } from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';
import { useFormStepper } from '@/shared/providers/use-form-stepper-provider';
import { SpecialityFormSchema } from '@/shared/validations';
import type { SignupFormDataType } from '@/types';

export default function ChooseSpeciality() {
  const route = useRouter();

  type SpecialityFormType = Pick<SignupFormDataType, 'architectSpeciality'>;
  const { formData, setFormData, onHandleNext } =
    useFormStepper<SignupFormDataType>();
  const { handleSubmit, control, errors } = useCustomForm(
    SpecialityFormSchema,
    {
      architectSpeciality: formData.architectSpeciality,
    }
  );

  const onHandleBack = () => {
    route.push('/(architect)/(public)/login');
  };

  const onSubmit = (data: SpecialityFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };
  const error = errors.architectSpeciality?.message as TxKeyPath | undefined;
  return (
    <View className="mb-5 flex h-full flex-1 items-center justify-between gap-16  ">
      <View>
        <Text
          tx={'signupStepSpeciality.title'}
          className="mb-2 text-center text-2xl font-extrabold"
        />
        <Text
          tx={'signupStepSpeciality.description'}
          className="max-w-xs text-center text-sm text-description"
        />
      </View>

      <ScrollView className="flex h-fit gap-5">
        <ToggleCard
          className="h-38 mb-7 w-64 rounded-2xl"
          title={translate('signupStepSpeciality.constructionArchitect')}
          svgComponent={HouseModel}
          name="architectSpeciality"
          control={control}
          value={1}
        />

        <ToggleCard
          className="h-38 mb-7 w-64 rounded-2xl"
          title={translate('signupStepSpeciality.interiorArchitect')}
          svgComponent={InteriorHouseModel}
          name="architectSpeciality"
          control={control}
          value={2}
        />
      </ScrollView>
      {error && <Text tx={error} className="text-sm text-error" />}
      <StepButtons
        previous={{ handlePreviousStep: onHandleBack, label: 'signup.ignorer' }}
        next={{ handleSubmit: handleSubmit(onSubmit), label: 'signup.suivant' }}
      />
    </View>
  );
}

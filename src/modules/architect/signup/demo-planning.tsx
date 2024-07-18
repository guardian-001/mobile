import React from 'react';

import { StepButtons } from '@/modules/shared';
import { ScrollView, Text, View } from '@/shared/components';
import { Calendar } from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';
import { useFormStepper } from '@/shared/providers/use-signup-stepper-provider';
import { DemoFormSchema } from '@/validations';

export type ResetFormProps = {
  handlePreviousStep?: () => void;
  handleNextStep: () => void;
};

export default function DemoPlanning({
  handlePreviousStep,
  handleNextStep,
}: ResetFormProps) {
  const { formData } = useFormStepper();
  const { handleSubmit, errors, watch } = useCustomForm(DemoFormSchema, {
    date: formData?.date,
    timeSlot: formData?.timeSlot,
  });

  const myFieldValue = watch('date');
  const myFieldValue2 = watch('timeSlot');
  const onSubmit = () => {
    console.log('errors date: ', errors.date?.message);
    console.log('errors timeSlot: ', errors.timeSlot?.message);
    console.log('date: ', formData.date);
    console.log('timeSlot: ', formData.timeSlot);
    console.log('formData : ', formData);
    handleNextStep();
  };

  return (
    <ScrollView
      className="h-fit w-full"
      contentContainerStyle={{
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View>
        <Text
          tx={'signupStepDemoPlanning.title'}
          className="mb-2 text-center text-2xl font-extrabold"
        />
        <Text
          tx={'signupStepDemoPlanning.description'}
          className="max-w-xs text-center text-sm text-description"
        />
      </View>
      <View className="my-5 flex h-fit w-4/5 rounded-3xl bg-white px-3 py-5 shadow-md">
        <Calendar errors={errors} />
      </View>
      {errors && <Text>{errors.date?.message}</Text>}
      {errors && <Text>{errors.timeSlot?.message}</Text>}
      <Text>{myFieldValue ? 'Field has value' : 'Field is empty'}</Text>
      <Text>{myFieldValue2 ? 'Field has value' : 'Field is empty'}</Text>
      <StepButtons
        previous={{ handlePreviousStep, label: 'signup.retour' }}
        next={{ handleSubmit: handleSubmit(onSubmit), label: 'signup.suivant' }}
      />
    </ScrollView>
  );
}

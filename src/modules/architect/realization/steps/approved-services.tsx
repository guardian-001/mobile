import React from 'react';
import { ScrollView, View } from 'react-native';

import { useNeedsApi } from '@/api/architect/project/use-needs';
import { translate, useCustomForm } from '@/core';
import { getUser } from '@/core/auth/utils';
import { StepButtons } from '@/modules/shared';
import { useFormStepper } from '@/shared';
import { ErrorData, PendingData, Text, ToggleCard } from '@/shared/components';

import { NeedsSchema } from '../schemas';
import type { ProjectRealizationType } from '../types';

export function ApprovedServices() {
  type NeedsFormType = Pick<ProjectRealizationType, 'needs'>;
  const { formData, setFormData, onHandleNext, onHandleBack } =
    useFormStepper<ProjectRealizationType>();
  const {
    handleSubmit,
    control,
    // errors
  } = useCustomForm(NeedsSchema, {
    needs: formData.needs,
  });
  console.log(getUser());
  const { data, isPending, isError, error } = useNeedsApi();
  console.log('error: ', error);

  const onSubmit = (selectedData: NeedsFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...selectedData,
    }));
    onHandleNext();
  };

  // const error = errors.needs?.message as TxKeyPath | undefined;
  return (
    <View className="mb-5 flex h-full w-full flex-1 items-start justify-between gap-6  ">
      {isError ? (
        <ErrorData message="Error Loading Data" />
      ) : (
        <>
          {isPending ? (
            <PendingData message="Pending" />
          ) : (
            <>
              <View className="mb-2">
                <Text
                  tx={'realisation.servicesStep.title'}
                  className="mb-2 text-start text-2xl font-extrabold"
                />
                <Text
                  tx={'realisation.servicesStep.description'}
                  className="max-w-xs text-start text-sm text-description"
                />
              </View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                className="flex w-full gap-2"
              >
                {data.map((item) => {
                  console.log('item: ', item);
                  return (
                    <ToggleCard
                      key={item.id.toString()}
                      className="mb-2 flex h-16 w-full flex-row rounded-lg"
                      title={item.label}
                      imageIcon={item.icon}
                      name="needs"
                      control={control}
                      multi={true}
                      value={item.id}
                    />
                  );
                })}
              </ScrollView>
              <View className="flex h-fit w-full items-center ">
                <Text className="w-11/12 text-left text-sm text-error">
                  {error ? translate(error) : ''}
                </Text>
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
            </>
          )}
        </>
      )}
    </View>
  );
}

import React from 'react';
import { ScrollView } from 'react-native';

import { useStylesApi } from '@/api/architect/project';
import { translate, type TxKeyPath } from '@/core';
import { StepButtons } from '@/modules/shared';
import { ErrorData, PendingData, Text, View } from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';
import { useFormStepper } from '@/shared/providers';

import { ArchitecturalStyleSchema } from '../schemas';
import { ProjectStyleComp } from '../shared/components';
import type { ProjectRealizationType } from '../types';

export function AdoptedStyle() {
  type CategoryFormType = Pick<ProjectRealizationType, 'architecturalStyle'>;
  const { formData, setFormData, onHandleNext, onHandleBack } =
    useFormStepper<ProjectRealizationType>();
  const { handleSubmit, control, errors } = useCustomForm(
    ArchitecturalStyleSchema,
    {
      architecturalStyle: formData.architecturalStyle,
    }
  );

  const { data, isPending, isError } = useStylesApi();

  const onSubmit = (selectedData: CategoryFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...selectedData,
    }));
    onHandleNext();
  };

  const error = errors.architecturalStyle?.message as TxKeyPath | undefined;
  return (
    <View className="mb-5 flex h-full w-full flex-1 items-center justify-between gap-6  ">
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
                  tx={'realisation.styleStep.title'}
                  className="mb-2 text-start text-2xl font-extrabold"
                />
                <Text
                  tx={'realisation.styleStep.description'}
                  className="max-w-xs text-start text-sm text-description"
                />
              </View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                className="flex w-full "
              >
                {data.map((item) => {
                  return (
                    <ProjectStyleComp
                      key={item.id.toString()}
                      classname="my-3 min-w-full"
                      name="architecturalStyle"
                      item={item}
                      control={control}
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

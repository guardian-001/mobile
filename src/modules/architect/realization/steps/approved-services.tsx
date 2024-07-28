import React from 'react';
import { ScrollView, View } from 'react-native';

import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import { ErrorData, PendingData, Text, ToggleCard } from '@/shared/components';

import { useServices } from '../shared/hooks/use-services';

export function ApprovedServices() {
  const {
    onSubmit,
    data,
    isPending,
    isError,
    error,
    handleSubmit,
    control,
    onHandleBack,
  } = useServices();

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
                {data?.map((item) => {
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
                    label: 'common.retour',
                  }}
                  next={{
                    handleSubmit: handleSubmit(onSubmit),
                    label: 'common.suivant',
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

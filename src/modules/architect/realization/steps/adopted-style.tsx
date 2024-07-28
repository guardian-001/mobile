import React from 'react';
import { ScrollView } from 'react-native';

import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import { ErrorData, PendingData, Text, View } from '@/shared/components';

import { ProjectStyleComp } from '../shared/components';
import { useStyles } from '../shared/hooks';

export function AdoptedStyle() {
  const {
    data,
    isPending,
    isError,
    error,
    onSubmit,
    handleSubmit,
    control,
    onHandleBack,
  } = useStyles();
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
                {data?.map((item) => {
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
                    label: 'common.back',
                  }}
                  next={{
                    handleSubmit: handleSubmit(onSubmit),
                    label: 'common.next',
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

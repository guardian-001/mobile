import React from 'react';
import { ScrollView } from 'react-native';

import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import { Text, View } from '@/shared/components';
import { EmptyList } from '@/shared/components/emptylist-custom';

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
    isSuccess,
  } = useStyles();
  return (
    <View className="mb-5 flex h-full w-full flex-1 items-center justify-between gap-6  ">
      {(isPending || data?.length === 0 || isError) && (
        <EmptyList isError={isError} isPending={isPending} />
      )}
      {isSuccess && (
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

          <View className="  flex w-full items-center ">
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
    </View>
  );
}

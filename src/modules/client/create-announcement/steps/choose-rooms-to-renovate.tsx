import React from 'react';

import type { resultType } from '@/api/client/announcements/types';
import { StepButtons } from '@/modules/shared';
import {
  Counter,
  EmptyList,
  ErrorData,
  ScrollView,
  View,
} from '@/shared/components';

import { useRoomsToRenovate } from '../hooks';

export function ChooseRoomsToRenovate() {
  const {
    onRollBack,
    handleSubmit,
    control,
    onSubmit,
    RenovateData,
    isError,
    isLoading,
    isFetchedAfterMount,
  } = useRoomsToRenovate();

  return (
    <View className="flex-1 pt-4">
      {isError ? (
        <ErrorData message="Error Loading Data" />
      ) : (
        <View className="flex flex-1 items-center justify-between">
          {isLoading || RenovateData?.length === 0 ? (
            <EmptyList isLoading={isLoading || isFetchedAfterMount} />
          ) : (
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerClassName="gap-4"
            >
              {RenovateData?.map((cardData: resultType) => (
                <Counter
                  key={cardData.id}
                  title={cardData.label}
                  image={cardData.icon}
                  name="piecesRenovate"
                  control={control}
                  id={cardData.id}
                />
              ))}
            </ScrollView>
          )}

          <StepButtons
            previous={{
              handlePreviousStep: onRollBack,
              label: 'common.back',
            }}
            next={{
              handleSubmit: handleSubmit(onSubmit),
              label: 'common.next',
            }}
          />
        </View>
      )}
    </View>
  );
}

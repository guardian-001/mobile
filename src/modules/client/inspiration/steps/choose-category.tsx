import React from 'react';
import { StyleSheet } from 'react-native';

import type { resultType } from '@/api/client/announcements/types';
import { translate } from '@/core';
import { StepperButton } from '@/modules/shared';
import {
  colors,
  EmptyList,
  ErrorData,
  GradientBackground,
  ScrollView,
  Text,
  ToggleCard,
  View,
} from '@/shared/components';

import { useCategory } from '../hooks/use-category';

export function ChooseCategory() {
  const {
    handleSubmit,
    control,
    error,
    onSubmit,
    CategoryData,
    isError,
    isLoading,
    isSuccess,
  } = useCategory();
  return (
    <View className="flex-1">
      <GradientBackground
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={styles.gradientBachgroud}
        colors={[colors['Pale-Sky-Blue'], colors['light-blue']]}
      >
        <Text
          tx="inspiration.chooseInspiration"
          className="w-4/5 text-3xl font-bold"
        />
      </GradientBackground>
      {isError && <ErrorData message="Error Loading Data" />}
      <View className="-mt-8 flex flex-1 justify-between p-4 pt-0">
        {(isLoading || CategoryData?.length === 0) && (
          <EmptyList isLoading={isLoading} />
        )}
        {isSuccess && (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerClassName="min-h-[85%] flex  flex-wrap flex-row items-center  justify-center gap-4"
          >
            {CategoryData?.map((Category: resultType) => (
              <ToggleCard
                key={Category.id}
                className="h-full w-full rounded-lg bg-white"
                containerClassName="min-h-[26%] min-w-[32%] max-w-[44%] max-h-[36%] rounded-lg"
                title={Category.label}
                image={Category.icon}
                name="projectCategory"
                control={control}
                value={Category.id}
              />
            ))}
          </ScrollView>
        )}
        {error && <Text className="text-sm text-error " tx={error} />}
        <StepperButton
          onPressHandler={handleSubmit(onSubmit)}
          label={translate('common.next')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  gradientBachgroud: { paddingHorizontal: 18, paddingVertical: 70 },
});

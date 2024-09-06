import React from 'react';
import { StyleSheet } from 'react-native';

import { StepButtons } from '@/modules/shared';
import {
  colors,
  EmptyList,
  ErrorData,
  GradientBackground,
  ScrollView,
  TagGroup,
  Text,
  View,
} from '@/shared/components';

import { usePropertyType } from '../hooks/use-property-type';

export function ChoosePropertyType() {
  const {
    onRollBack,
    handleSubmit,
    control,
    error,
    onSubmit,
    PropertyData,
    isError,
    isLoading,
    isSuccess,
  } = usePropertyType();
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
      <View className="flex flex-1 justify-between p-4 pb-8">
        <View className="flex-1">
          {(isLoading || (PropertyData?.length === 0 && !isError)) && (
            <EmptyList isLoading={isLoading} />
          )}
          {isSuccess && (
            <ScrollView className="flex" showsVerticalScrollIndicator={false}>
              <TagGroup
                name="propertyType"
                control={control}
                tags={PropertyData}
                error={error}
                sliced={false}
                multi={true}
              />
            </ScrollView>
          )}
        </View>
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
    </View>
  );
}
const styles = StyleSheet.create({
  gradientBachgroud: { paddingHorizontal: 18, paddingVertical: 70 },
});

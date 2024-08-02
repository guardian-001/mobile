import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import { Text, View } from '@/shared/components';
import { EmptyList } from '@/shared/components/emptylist-architect';

import { ProjectCategoryComp } from '../shared/components';
import { useCategory } from '../shared/hooks';

export function ProjectCategory() {
  const {
    onHandleBack,
    handleSubmit,
    control,
    error,
    onSubmit,
    data,
    isPending,
    isError,
    isSuccess,
  } = useCategory();

  return (
    <View className="mb-5 flex h-full flex-1 items-start justify-between gap-16  ">
      {isPending && <EmptyList isError={isError} isPending={isPending} />}
      {isSuccess && (
        <>
          <View>
            <Text
              tx={'realisation.categoryStep.title'}
              className="mb-2 text-start text-2xl font-extrabold"
            />
            <Text
              tx={'realisation.categoryStep.description'}
              className="max-w-xs text-start text-sm text-description"
            />
          </View>

          <FlatList
            data={data}
            renderItem={({ item }) => (
              <ProjectCategoryComp
                name="projectCategory"
                item={item}
                control={control}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapperListStyle}
            contentContainerStyle={styles.contentContainerListStyle}
          />

          <View className="flex h-fit w-full items-center">
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

const styles = StyleSheet.create({
  columnWrapperListStyle: {
    justifyContent: 'space-between',
    gap: 8,
    width: '100%',
  },
  contentContainerListStyle: { paddingHorizontal: 16, width: '100%' },
});

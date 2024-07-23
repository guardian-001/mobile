import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { useStylesApi } from '@/api/architect/project';
import type { TxKeyPath } from '@/core';
import { ProjectStyleComp, StepButtons } from '@/modules/shared';
import { Text, View } from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';
import { useFormStepper } from '@/shared/providers';

import { ArchitecturalStyleSchema } from '../schemas';
import type { ProjectRealizationType } from '../types';

export default function AdoptedStyle() {
  const router = useRouter();
  type CategoryFormType = Pick<ProjectRealizationType, 'architecturalStyle'>;
  const { formData, setFormData, onHandleNext } =
    useFormStepper<ProjectRealizationType>();
  const { handleSubmit, control, errors } = useCustomForm(
    ArchitecturalStyleSchema,
    {
      architecturalStyle: formData.architecturalStyle,
    }
  );

  const { data, isPending, isError } = useStylesApi();

  const onHandleBack = () => {
    router.back();
  };
  const onSubmit = (selectedData: CategoryFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...selectedData,
    }));
    onHandleNext();
  };

  const error = errors.architecturalStyle?.message as TxKeyPath | undefined;
  return (
    <View className="mb-5 flex h-full flex-1 items-start justify-between gap-16  ">
      {isError ? (
        <View>
          <Text>Error Loading Data</Text>
        </View>
      ) : (
        <>
          {isPending ? (
            <View>
              <Text>Pending</Text>
            </View>
          ) : (
            <>
              <View>
                <Text
                  tx={'realisation.categoryStep.title'}
                  className="mb-2 text-center text-2xl font-extrabold"
                />
                <Text
                  tx={'realisation.categoryStep.description'}
                  className="max-w-xs text-center text-sm text-description"
                />
              </View>

              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <ProjectStyleComp
                    name="architecturalStyle"
                    item={item}
                    control={control}
                  />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapperListStyle}
                contentContainerStyle={styles.contentContainerListStyle}
              />

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
            </>
          )}
        </>
      )}
      {error && <Text tx={error} className="text-sm text-error" />}
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

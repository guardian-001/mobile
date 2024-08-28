import React from 'react';

import {
  Big,
  BigBorder,
  Little,
  LittleBorder,
} from '@/assets/icons/archimatch';
import { translate } from '@/core';
import {
  Button,
  ControlledInput,
  ControlledSelect,
  SwitchInput,
  Text,
  ToggleRadioCard,
  View,
} from '@/shared/components';

import { useAddCollection } from '../../profile/hooks/use-add-collection';

export default function AddCollectionForm() {
  const { handleSubmit, modalControl, onSubmit, categoriesOptions } =
    useAddCollection();
  return (
    <View className="p-4">
      <Text
        tx="catalogue.createCollection.headerTitle"
        className="text-xl font-bold"
      />
      <Text
        tx="catalogue.createCollection.headerDescription"
        className="text-xs text-description"
      />
      <ControlledInput
        required={true}
        control={modalControl}
        name="title"
        labelStyle="mb-1 text-sm font-semibold"
        className=" mb-5 mt-4 gap-2"
        label={translate('catalogue.createCollection.titleLable')}
        placeholder={translate('catalogue.createCollection.titlePlaceholder')}
      />
      <ControlledSelect
        testID="city-input"
        control={modalControl}
        name="categoryLabel"
        options={categoriesOptions || []}
        labelStyle="mb-1 text-sm font-semibold"
        label={translate('catalogue.createCollection.categoryLable')}
        placeholder={translate(
          'catalogue.createCollection.categoryPlaceholder'
        )}
        required={true}
      />
      <View className="mt-2 flex gap-3 ">
        <Text
          className="text-sm font-semibold text-primary-txt"
          tx={'catalogue.createCollection.visibilityLabel'}
        />
        <View className="h-10">
          <SwitchInput
            accessibilityLabel=""
            label={translate(
              'catalogue.createCollection.visibilityDescriptionActive'
            )}
            labelSwitch={translate(
              'catalogue.createCollection.visibilityDescriptionNotActive'
            )}
            name="visibility"
            control={modalControl}
          />
        </View>
      </View>
      <View className="mt-3 flex w-full flex-row justify-start">
        <Text
          tx="catalogue.createCollection.appearance"
          className="mb-1 text-sm font-semibold"
        />
        <Text className="text-primary">*</Text>
      </View>
      <View className="mx-auto mt-5 flex h-72  w-3/5 flex-row items-start justify-center  ">
        <ToggleRadioCard
          key={0}
          className="h-52"
          title={translate('catalogue.createCollection.little')}
          description={translate(
            'catalogue.createCollection.littleDescription'
          )}
          svgComponent={Big}
          svgComponentBorder={BigBorder}
          name="appearance"
          control={modalControl}
          value={'grande'}
        />
        <ToggleRadioCard
          key={1}
          className="h-52"
          title={translate('catalogue.createCollection.big')}
          description={translate('catalogue.createCollection.bigDescription')}
          svgComponent={Little}
          svgComponentBorder={LittleBorder}
          name="appearance"
          control={modalControl}
          value={'petite'}
        />
      </View>
      <Button
        label={translate('common.publish')}
        className=" h-10 w-full rounded-lg"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}

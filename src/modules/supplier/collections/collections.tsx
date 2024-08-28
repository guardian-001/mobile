import React from 'react';
import { Platform } from 'react-native';

import { Filter, Plus, Search } from '@/assets/icons';
import { translate } from '@/core';
import {
  Button,
  colors,
  ControlledInput,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from '@/shared/components';

import { CollectionCard } from './components/collection-card';
import { collections } from './dump-data';
import { useCollection } from './hooks/use-collection';

export const CollectionManagement = () => {
  const { navigateTo, control } = useCollection();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <View className="my-6 w-full flex-row items-center justify-between px-4">
        <Text
          tx="collection.manageCollections"
          className="text-lg font-extrabold"
        />
        <Image
          source={require('@/assets/images/architecteImage.jpg')}
          className="mb-3 h-14 w-14 rounded-full"
          contentFit="cover"
        />
      </View>
      <View className="h-full w-full flex-1 rounded-t-3xl bg-white p-4">
        <View className="my-2 flex flex-row">
          <Button
            icon={<Filter />}
            onPress={() => {}}
            className="!my-0 mr-4 h-12 w-12 rounded-lg"
            alternativeBg="bg-light-blue"
          />
          <ControlledInput
            icon={<Search />}
            control={control}
            name="search"
            placeholder={translate('labels.search')}
            className="flex-1"
          />
        </View>
        <TouchableOpacity
          className="mb-4 h-14 w-full flex-row items-center justify-center gap-3 rounded-lg border border-dashed border-description"
          onPress={() => {}}
        >
          <Plus color={colors.blue} />
          <Text tx="collection.addCollection" className=" font-semibold" />
        </TouchableOpacity>
        <ScrollView
          contentContainerClassName="pb-6 gap-3"
          showsVerticalScrollIndicator={false}
        >
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              title={collection.title}
              productsCount={collection.productsCount}
              onEdit={navigateTo}
              onDelete={() => {}}
            />
          ))}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

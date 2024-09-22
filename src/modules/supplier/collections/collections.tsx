import React from 'react';
import { Platform } from 'react-native';

import { Filter, Plus, Search } from '@/assets/icons';
import { translate } from '@/core';
import {
  Button,
  colors,
  ControlledInput,
  FetchStateHandler,
  Image,
  KeyboardAvoidingView,
  Modal,
  Options,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from '@/shared/components';

import { useAddCollection } from '../catalogue/hooks/use-add-collection';
import { useProfileInfo } from '../profile/hooks/use-profile-info';
import AddCollectionForm from '../shared/components/add-collection-form';
import { CollectionCard } from './components/collection-card';
import { useCollection } from './hooks/use-collection';

export const CollectionManagement = () => {
  const { data } = useProfileInfo();
  const {
    navigateTo,
    control,
    modal,
    CollectionData,
    isErrorCollection,
    isLoadingCollection,
    isSuccessCollection,
    categoriesOptions,
    onSelectOption,
    field,
  } = useCollection();
  const { reset, ref, present } = useAddCollection();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <View className="my-7 w-full flex-row items-center justify-between px-4">
        <Text
          tx="collection.manageCollections"
          className="text-lg font-extrabold"
        />
        <Image
          source={data?.profileImage}
          className="h-16 w-16 rounded-full"
          contentFit="cover"
        />
      </View>
      <View className="h-full w-full flex-1 rounded-t-3xl bg-white p-4">
        <View className="my-2 flex flex-row">
          <Button
            icon={<Filter />}
            onPress={modal.present}
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
          onPress={() => present()}
        >
          <Plus color={colors.blue} />
          <Text tx="collection.addCollection" className=" font-semibold" />
        </TouchableOpacity>
        <FetchStateHandler
          isError={isErrorCollection}
          isPending={isLoadingCollection}
          isEmpty={CollectionData?.length === 0}
          isSuccess={isSuccessCollection}
          type="CUSTOM"
        >
          <ScrollView
            contentContainerClassName="pb-6 gap-3"
            showsVerticalScrollIndicator={false}
          >
            {CollectionData?.map((collection) => (
              <CollectionCard
                key={collection.id}
                id={collection.id.toString()}
                title={collection.title}
                productsCount={collection.products.length}
                onEdit={() => navigateTo(collection.id.toString())}
              />
            ))}
          </ScrollView>
        </FetchStateHandler>
      </View>
      <Modal snapPoints={['85%']} ref={ref} onDismiss={() => reset()}>
        <AddCollectionForm />
      </Modal>
      <Options
        ref={modal.ref}
        options={categoriesOptions || []}
        onSelect={onSelectOption}
        value={field.value}
      />
    </KeyboardAvoidingView>
  );
};

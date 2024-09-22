import React from 'react';
import { Platform } from 'react-native';

import { Search } from '@/assets/icons';
import { translate } from '@/core';
import {
  ControlledInput,
  FetchStateHandler,
  Image,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from '@/shared/components';

import { useProfileInfo } from '../profile/hooks/use-profile-info';
import AddProductForm from '../shared/components/add-product-form';
import { ProductCard } from './components/product-card';
import { useEditCollection } from './hooks/use-edit-collection';

export const EditCollection = () => {
  const { data } = useProfileInfo();
  const {
    products,
    control,
    isError,
    isLoading,
    isSuccess,
    reset,
    ref,
    present,
    collection,
  } = useEditCollection();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <View className="my-7 w-11/12 flex-row items-center justify-between self-end px-4">
        <Text tx="collection.collection" className="text-lg font-extrabold" />
        <Image
          source={data?.profileImage}
          className="h-16 w-16 rounded-full"
          contentFit="cover"
        />
      </View>
      <View className="h-full w-full flex-1 rounded-t-3xl bg-white p-4 pb-0">
        <ControlledInput
          icon={<Search />}
          control={control}
          name="search"
          placeholder={translate('labels.search')}
          className="my-2"
        />
        <TouchableOpacity
          className="my-4 h-14 w-full flex-row items-center justify-center gap-3 rounded-lg border border-dashed border-description"
          onPress={present}
        >
          <Image
            source={require('@/assets/images/add-product.png')}
            className="h-7 w-6"
          />
          <Text tx="collection.addProduct" className="font-semibold" />
        </TouchableOpacity>
        <FetchStateHandler
          isError={isError}
          isPending={isLoading}
          isEmpty={products?.length === 0}
          isSuccess={isSuccess}
          type="CUSTOM"
        >
          <ScrollView
            contentContainerClassName="gap-3 pb-4"
            showsVerticalScrollIndicator={false}
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.name}
                price={product.price}
                imageUrl={product.productImages[0].image}
                onEdit={() => {}}
                id={product.id.toString()}
              />
            ))}
          </ScrollView>
        </FetchStateHandler>
      </View>
      <Modal snapPoints={['85%']} ref={ref} onDismiss={() => reset()}>
        <AddProductForm selectedCollection={collection} />
      </Modal>
    </KeyboardAvoidingView>
  );
};

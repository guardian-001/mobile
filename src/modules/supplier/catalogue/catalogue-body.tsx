import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { NoDataBox } from '@/assets/icons/archimatch/no-data-box';
import { translate } from '@/core';
import { Button, Modal, Text, View } from '@/shared/components';

import AddProductForm from '../shared/components/add-product-form';
import ProductBigGrid from './components/products-big-grid';
import ProductLittleGrid from './components/products-little-grid';
import { useAddProduct } from './hooks/use-add-product';
import type { Collection } from './types';

type BodyProps = {
  selectedCollection?: Collection;
};

export default function CatalogueBody({ selectedCollection }: BodyProps) {
  const { reset, ref, present } = useAddProduct(String(selectedCollection?.id));

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <View className="flex h-full w-full justify-start ">
        {selectedCollection && selectedCollection?.products?.length > 0 ? (
          <>
            {selectedCollection?.appearance === 'Petite' ? (
              <ProductLittleGrid
                onAddProductPress={present}
                items={selectedCollection?.products}
              />
            ) : (
              <ProductBigGrid
                onAddProductPress={present}
                items={selectedCollection?.products}
              />
            )}
          </>
        ) : (
          <View className="flex h-3/5 w-full items-center justify-start gap-28">
            <Text
              tx={'catalogue.createCollection.collectionProductsNoDataTitle'}
              className="text-md m-4 w-full px-4 text-start font-bold"
            />
            <View className="flex w-full items-center justify-between gap-16">
              <View className="flex w-full items-center justify-center gap-5">
                <NoDataBox />
                <Text
                  tx={
                    'catalogue.createCollection.collectionProductsNoDataDescription'
                  }
                  className="text-md font-bold text-description"
                />
              </View>
              <Button
                label={translate('catalogue.createProduct.addProduct')}
                className="h-12 w-2/5 rounded-lg"
                onPress={() => present()}
              />
            </View>
          </View>
        )}
        <Modal snapPoints={['85%']} ref={ref} onDismiss={() => reset()}>
          <AddProductForm selectedCollection={selectedCollection} />
        </Modal>
      </View>
    </KeyboardAvoidingView>
  );
}

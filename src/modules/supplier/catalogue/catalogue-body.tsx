import React from 'react';

import { NoDataBox } from '@/assets/icons/archimatch/no-data-box';
import { translate } from '@/core';
import { Button, Modal, Text, View } from '@/shared/components';

import AddProductForm from '../shared/components/add-product-form';
import { useAddProduct } from './hooks/use-add-product';
import { useProfileCatalogue } from './hooks/use-profile-catalogue';

export default function CatalogueBody() {
  const { collectionProducts } = useProfileCatalogue();
  const { reset, ref, present } = useAddProduct();

  return (
    <View className="flex  h-full w-full   justify-start">
      {collectionProducts && collectionProducts?.length > 0 ? (
        <View>
          <Text>data</Text>
        </View>
      ) : (
        <View className="flex  h-3/5  w-full   items-center justify-start gap-28  ">
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
              className="  h-12 w-2/5 rounded-lg"
              onPress={() => present()}
            />
          </View>
        </View>
      )}
      <Modal snapPoints={['85%']} ref={ref} onDismiss={() => reset()}>
        <AddProductForm />
      </Modal>
    </View>
  );
}

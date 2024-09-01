import React from 'react';

import { NoDataBox } from '@/assets/icons/archimatch/no-data-box';
import { translate } from '@/core';
import { Button, Modal, Text, View } from '@/shared/components';

import type { Collection } from '../profile/type';
import AddProductForm from '../shared/components/add-product-form';
import { useAddProduct } from './hooks/use-add-product';

type BodyProps = {
  selectedCollection?: Collection;
};

export default function CatalogueBody({ selectedCollection }: BodyProps) {
  // const { collectionProducts } = useProfileCatalogue();
  const { reset, ref, present } = useAddProduct(String(selectedCollection?.id));

  return (
    <View className="flex h-full w-full justify-start">
      {selectedCollection && selectedCollection?.products?.length > 0 ? (
        <View>
          {selectedCollection?.products?.map((product) => {
            return (
              <View>
                <Text>{product.name}</Text>
                <Text>{product.price}</Text>
              </View>
            );
          })}
        </View>
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
  );
}

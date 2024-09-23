import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Trash } from '@/assets/icons/archimatch';
import { AddProductImg } from '@/assets/icons/archimatch/add-product';
import { Pen } from '@/assets/icons/archimatch/pen';
import { Button, colors, Modal, Text } from '@/shared/components';

import type { Product } from '../../profile/type';
import { useDeleteProduct } from '../hooks/use-delete-product';
import BigImageSlider from './big-image-slider';
import DeleteProductForm from './confirm-delete-product';

type ProductBigProps = {
  item: Product;
  index: number;
  onAddProductPress: () => void;
};

const ProductBig = ({ item, index, onAddProductPress }: ProductBigProps) => {
  const { ref, present, onSubmit } = useDeleteProduct(item.id.toString());

  if (index === 0) {
    return (
      <TouchableOpacity onPress={onAddProductPress} className="m-2 flex flex-1">
        <View className="m-2 flex-1 items-center justify-center rounded-3xl border-2 border-dashed border-description bg-gray-100 p-4">
          <AddProductImg />
          <Text className="-mt-5 text-base font-medium">+ Add Product</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View className="m-2   flex-1 items-center rounded-3xl bg-white   pt-4 shadow-md shadow-gray-300">
      <BigImageSlider images={item.productImages.map((img) => img.image)} />
      <View className="items-between w-full flex-1 flex-row justify-between pl-4">
        <View>
          <Text className="mb-1 text-lg font-bold">{item.name}</Text>
          <Text className="mb-4 text-sm text-main-project-blue">
            ${item.price}
          </Text>
        </View>
        <View className="flex-1 flex-row items-end justify-end gap-2">
          <Button
            iconClassName="flex justify-center items-center"
            icon={<Pen color={colors.blue} />}
            className="mr-2 h-10 w-10 rounded-full bg-slate-200"
            onPress={() => {}}
          />
          <Button
            iconClassName="flex justify-center items-center"
            icon={<Trash />}
            className="mr-2 h-10 w-10 rounded-full bg-slate-200"
            onPress={present}
          />
        </View>
      </View>
      <Modal snapPoints={['25%']} ref={ref}>
        <DeleteProductForm id={item.id.toString()} onSubmit={onSubmit} />
      </Modal>
    </View>
  );
};

export default ProductBig;

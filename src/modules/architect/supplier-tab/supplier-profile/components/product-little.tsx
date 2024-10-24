import React from 'react';
import { View } from 'react-native';

import type { Product } from '@/api/supplier/profile/types';
import { ArrowRightLong } from '@/assets/icons/long-arrow-right';
import { Button, Text } from '@/shared/components';

import ImageSlider from './image-slider';

type ProductLittleProps = {
  item: Product;
};

const ProductLittle = ({ item }: ProductLittleProps) => {
  return (
    <View className="m-2 max-w-[47%] flex-1 items-center rounded-3xl bg-white pl-4 pt-4 shadow-md shadow-gray-300">
      <ImageSlider images={item.productImages.map((img) => img.image)} />
      <View className="items-between w-full flex-1 flex-row justify-between">
        <View>
          <Text className="mb-1 text-lg font-bold">{item.name}</Text>
          <Text className="mb-4 text-sm text-main-project-blue">
            ${item.price}
          </Text>
        </View>
        <View className="flex-1 flex-row items-end justify-end gap-2">
          <Button
            iconClassName="flex justify-center items-center"
            icon={<ArrowRightLong />}
            className="mr-2 h-10 w-10 rounded-full bg-slate-200"
          />
        </View>
      </View>
    </View>
  );
};

export default ProductLittle;

import React from 'react';

import type { Product } from '@/api/supplier/profile/types';
import { Text, View } from '@/shared/components';

import BigImageSlider from './big-image-slider';

type ProductBigProps = {
  item: Product;
};

const ProductBig = ({ item }: ProductBigProps) => {
  const hasImages = item?.productImages?.length > 0;

  return (
    <View className="m-2 flex-1 items-center rounded-3xl bg-white p-4 shadow-md shadow-gray-300">
      {hasImages && (
        <BigImageSlider images={item?.productImages.map((img) => img.image)} />
      )}
      <View className="w-full px-4">
        <Text className="text-lg font-bold">{item.name}</Text>
        <Text className="text-right text-sm text-main-project-blue">
          ${item.price}
        </Text>
      </View>
    </View>
  );
};

export default ProductBig;

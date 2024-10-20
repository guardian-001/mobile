import React, { useState } from 'react';

import { translate } from '@/core';
import { Image, Text, View } from '@/shared/components';

type ProductCardProps = {
  imageUrl: string;
  title: string;
  price?: string;
};

export const ProductCard = ({ imageUrl, title, price }: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);
  const fallbackImage =
    'https://raw.githubusercontent.com/AzizSandid/AzizSandid/main/product-image-3.jfif';
  return (
    <View className=" items-center justify-between rounded-2xl bg-white p-4 shadow-md shadow-color-shadow">
      <Image
        source={{
          uri: imageError || !imageUrl ? fallbackImage : imageUrl,
        }}
        className="h-32 w-36 rounded-md"
        onError={() => setImageError(true)}
        contentFit="contain"
      />
      <Text className="w-36 text-left text-sm font-bold">{title}</Text>
      <Text className="w-36 text-right text-sm font-bold">
        {price ? `${price} dt` : translate('collection.priceNotDefined')}
      </Text>
    </View>
  );
};

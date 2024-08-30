import React from 'react';

import { Image, Text, View } from '@/shared/components';

type ProductCardProps = {
  imageUrl: string;
  title: string;
  price?: string;
};

export const ProductCard = ({ imageUrl, title, price }: ProductCardProps) => {
  return (
    <View className=" items-center justify-between rounded-2xl border border-color-border bg-white p-3">
      <Image source={{ uri: imageUrl }} className="mr-4 h-28 w-36 rounded-md" />
      <Text className="font-bold">{title}</Text>
      <Text className="font-bold">
        {price ? `${price} dt` : 'Prix non défini'}
      </Text>
    </View>
  );
};

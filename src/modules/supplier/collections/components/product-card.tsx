import React from 'react';

import { Trash } from '@/assets/icons/archimatch';
import { Pen } from '@/assets/icons/archimatch/pen';
import {
  colors,
  Image,
  Text,
  TouchableOpacity,
  View,
} from '@/shared/components';

type ProductCardProps = {
  imageUrl: string;
  title: string;
  price?: string;
  onEdit: () => void;
  onDelete: () => void;
};

export const ProductCard = ({
  imageUrl,
  title,
  price,
  onEdit,
  onDelete,
}: ProductCardProps) => {
  return (
    <View className="flex-row items-center justify-between rounded-2xl border border-color-border bg-white p-4">
      <View className="flex-row items-center">
        <Image
          source={{ uri: imageUrl }}
          className="mr-4 h-10 w-10 rounded-md"
        />
        <View>
          <Text className="font-bold">{title}</Text>
          <Text className="text-sm font-medium text-description">
            {price ? `${price} dt` : 'Prix non défini'}
          </Text>
        </View>
      </View>
      <View className="h-full flex-row items-end space-x-4">
        <TouchableOpacity onPress={onEdit}>
          <Pen color={colors.blue} width={25} height={35} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Trash color={colors.blue} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

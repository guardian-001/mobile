import React from 'react';

import { Pen, Trash } from '@/assets/icons/archimatch';
import { colors, Text, TouchableOpacity, View } from '@/shared/components';

type CollectionCardProps = {
  title: string;
  productsCount: number;
  onEdit: () => void;
  onDelete: () => void;
};

export const CollectionCard = ({
  title,
  productsCount,
  onEdit,
  onDelete,
}: CollectionCardProps) => {
  return (
    <View className="flex-row items-center justify-between rounded-2xl border border-color-border bg-white p-4">
      <View>
        <Text className="font-bold">{title}</Text>
        <Text className="text-sm font-medium text-description">
          {productsCount} Produits
        </Text>
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

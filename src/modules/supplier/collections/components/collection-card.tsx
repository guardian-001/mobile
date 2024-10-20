import React from 'react';

import { Pen, Trash } from '@/assets/icons/archimatch';
import {
  colors,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from '@/shared/components';

import { useDeleteCollection } from '../hooks/use-delete-collection';
import DeleteCollectionForm from './confirm-delete-collection';

type CollectionCardProps = {
  title: string;
  productsCount: number;
  id: string;
  onEdit: () => void;
};

export const CollectionCard = ({
  title,
  productsCount,
  onEdit,
  id,
}: CollectionCardProps) => {
  const { ref, present, onSubmit } = useDeleteCollection(id);

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
        <TouchableOpacity onPress={present}>
          <Trash color={colors.blue} />
        </TouchableOpacity>
      </View>
      <Modal snapPoints={['25%']} ref={ref}>
        <DeleteCollectionForm id={id} onSubmit={onSubmit} />
      </Modal>
    </View>
  );
};

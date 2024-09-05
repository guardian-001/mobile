import React from 'react';

import { translate } from '@/core';
import { Button, Text, View } from '@/shared/components';

export default function DeleteProductForm({
  id,
  onSubmit,
}: {
  id: string;
  onSubmit: (id: string) => void;
}) {
  return (
    <View className="flex h-fit justify-center p-4">
      <Text
        tx="catalogue.createProduct.confirmDeleteTitle"
        className="text-xl font-bold"
      />
      <Text
        tx="catalogue.createProduct.confirmDeleteDescription"
        className="text-xs text-description"
      />

      <Button
        label={translate('common.delete')}
        className=" mt-4  h-10 w-full rounded-lg"
        onPress={() => onSubmit(id)}
      />
    </View>
  );
}

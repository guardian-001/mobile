import React from 'react';
import { FlatList, View } from 'react-native';

import { Search } from '@/assets/icons';
import { translate } from '@/core';
import { ControlledInput } from '@/shared/components';

import type { Product } from '../../profile/type';
import { useProductManagement } from '../hooks/use-product-management';
import ProductBig from './product-big';

type ProductGridProps = {
  items: Product[];
  onAddProductPress: () => void;
};

const ProductBigGrid = ({ items, onAddProductPress }: ProductGridProps) => {
  const { control, filteredItems } = useProductManagement(items);

  return (
    <View className="mt-2 flex gap-2">
      <View className="px-5">
        <ControlledInput
          icon={<Search />}
          control={control}
          name="search"
          placeholder={translate('labels.search')}
        />
      </View>
      <FlatList
        data={[
          {
            id: -1,
            name: '',
            price: 0,
            description: '',
            productImages: [{ id: 0, image: '' }],
            collectionCategory: '',
            collectionTitle: '',
            order: 0,
            display: false,
          },
          ...filteredItems,
        ]}
        renderItem={({ item, index }: { item: Product; index: number }) => (
          <ProductBig
            item={item}
            index={index}
            onAddProductPress={onAddProductPress}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerClassName="px-2 pt-2 pb-24"
      />
    </View>
  );
};

export default ProductBigGrid;

import React from 'react';
import { FlatList, View } from 'react-native';

import { Search } from '@/assets/icons';
import { translate } from '@/core';
import { ControlledInput } from '@/shared/components';

import type { Product } from '../../profile/type';
import { DEFAULT_PRODUCT } from '../../shared/constant';
import { useProductManagement } from '../hooks/use-product-management';
import ProductLittle from './product-little';

type ProductGridProps = {
  items: Product[];
  onAddProductPress: () => void;
};

const ProductLittleGrid = ({ items, onAddProductPress }: ProductGridProps) => {
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
        data={[DEFAULT_PRODUCT, ...filteredItems]}
        renderItem={({ item, index }: { item: Product; index: number }) => (
          <ProductLittle
            item={item}
            index={index}
            onAddProductPress={onAddProductPress}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperClassName="justify-between"
        contentContainerClassName="px-2 pt-2 pb-24"
      />
    </View>
  );
};

export default ProductLittleGrid;

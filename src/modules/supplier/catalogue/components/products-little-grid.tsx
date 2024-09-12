import React from 'react';
import { FlatList, Pressable, TouchableOpacity, View } from 'react-native';

import { Search } from '@/assets/icons';
import { translate } from '@/core';
import { ControlledInput, Text } from '@/shared/components';

import type { Product } from '../../profile/type';
import { DEFAULT_PRODUCT } from '../../shared/constant';
import { useProductManagement } from '../hooks/use-product-management';
import ProductLittle from './product-little';

type ProductGridProps = {
  items: Product[];
  onAddProductPress: () => void;
};

const ProductLittleGrid = ({ items, onAddProductPress }: ProductGridProps) => {
  const {
    control,
    filteredItems,
    selectedValue,
    searchValue,
    handleSelectItem,
    listState,
    setListState,
  } = useProductManagement(items);

  return (
    <View className="mt-2 flex gap-2">
      <View className="  absolute z-10 w-full px-5">
        <ControlledInput
          icon={<Search />}
          control={control}
          name="search"
          placeholder={translate('labels.search')}
          choiceValue={selectedValue !== null ? selectedValue : undefined}
          handleOnChange={() => setListState(true)}
        />
        {searchValue && listState && (
          <Pressable
            onPress={() => setListState(false)}
            className="  h-96 w-full rounded-lg "
          >
            <View className=" mb-1  w-full rounded-lg  bg-white">
              <FlatList
                data={filteredItems}
                renderItem={({ item }: { item: Product }) => (
                  <TouchableOpacity
                    onPress={() => {
                      handleSelectItem(item.name);
                    }}
                  >
                    <Text className="text-lg font-bold">{`* ${item.name}`}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
                contentContainerClassName="px-4 py-4"
              />
            </View>
          </Pressable>
        )}
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
        contentContainerClassName="px-2 pt-2 pb-24 mt-12"
      />
    </View>
  );
};

export default ProductLittleGrid;

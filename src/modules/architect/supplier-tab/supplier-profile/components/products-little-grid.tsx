import React from 'react';
import { FlatList, Pressable, TouchableOpacity, View } from 'react-native';

import type { Product } from '@/api/supplier/profile/types';
import { Search } from '@/assets/icons';
import { translate } from '@/core';
import { ControlledInput, Text } from '@/shared/components';
import { EmptyList } from '@/shared/components/emptylist-custom';

import { useProductManagement } from '../hooks/use-product-management';
import ProductLittle from './product-little';

type ProductGridProps = {
  items: Product[];
  onAddProductPress?: () => void;
};

const ProductLittleGrid = ({ items }: ProductGridProps) => {
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
      {filteredItems?.length > 0 ? (
        <>
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
                className="  h-96 w-full rounded-lg shadow-lg shadow-color-shadow "
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
            data={[...filteredItems]}
            renderItem={({ item }: { item: Product }) => (
              <ProductLittle item={item} />
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperClassName="justify-between"
            contentContainerClassName="px-2 pt-2 pb-24 mt-12"
          />
        </>
      ) : (
        <EmptyList isEmpty={true} isError={false} isPending={false} />
      )}
    </View>
  );
};

export default ProductLittleGrid;

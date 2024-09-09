import React from 'react';
import { FlatList } from 'react-native';

import { Text, View } from '@/shared/components';
import { EmptyList } from '@/shared/components/emptylist-custom';

import { useGalerie } from './hooks/use-galerie';

export default function Galerie({ architectId }: { architectId?: number }) {
  const { renderItem, Realizations, isError, isLoading, isSuccess } =
    useGalerie(architectId || 0);
  if (!architectId) {
    return <Text>No architect data available</Text>;
  }
  return (
    <View className="flex-1">
      <EmptyList
        isError={isError}
        isPending={isLoading}
        isEmpty={Realizations?.length === 0}
      />
      {isSuccess && (
        <FlatList
          data={Realizations}
          renderItem={renderItem}
          contentContainerClassName="p-[16px] pb-0"
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

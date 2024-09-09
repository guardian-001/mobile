import React from 'react';
import { FlatList } from 'react-native';

import { EmptyList, ErrorData, View } from '@/shared/components';

import { useGalerie } from './hooks/use-galerie';

export default function Galerie({ architectId }: { architectId: number }) {
  const { renderItem, Realizations, isError, isLoading, isSuccess } =
    useGalerie(architectId);

  return (
    <View className="flex-1">
      {isError && <ErrorData message="Error Loading Data" />}
      {(isLoading || Realizations?.length === 0) && (
        <EmptyList isLoading={isLoading} />
      )}
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

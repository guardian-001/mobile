import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList } from 'react-native';

import { translate } from '@/core';
import { Button, View } from '@/shared/components';
import { EmptyList } from '@/shared/components/emptylist-custom';

import { useInspiration } from '../hooks/use-inspiration';

export function InspirationScrolling() {
  const {
    snapToOffsets,
    renderItem,
    Realizations,
    isError,
    isLoading,
    isSuccess,
  } = useInspiration();
  const router = useRouter();
  return (
    <View className="flex-1">
      <EmptyList
        isError={isError}
        isPending={isLoading}
        isEmpty={Realizations?.length === 0}
      />
      {isSuccess && Realizations?.length === 0 && (
        <Button
          label={translate('resetpass.reset')}
          onPress={() => {
            router.dismiss();
            router.push('/(client)/(private)/(tab)/inspiration');
          }}
          className="my-8 h-12 w-1/2 self-center rounded-lg"
        />
      )}
      {isSuccess && Realizations && Realizations?.length > 0 && (
        <FlatList
          data={Realizations}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          snapToOffsets={snapToOffsets}
        />
      )}
    </View>
  );
}

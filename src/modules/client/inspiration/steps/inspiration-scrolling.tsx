import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList } from 'react-native';

import { translate } from '@/core';
import { Button, FetchStateHandler, View } from '@/shared/components';

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
      <FetchStateHandler
        isError={isError}
        isPending={isLoading}
        isEmpty={Realizations?.length === 0}
        isSuccess={isSuccess}
      >
        <View className="flex-1">
          {Realizations?.length === 0 && (
            <Button
              label={translate('resetpass.reset')}
              onPress={() => {
                router.dismiss();
                router.push('/(client)/(private)/(tab)/inspiration');
              }}
              className="my-8 h-12 w-1/2 self-center rounded-lg"
            />
          )}
          {Realizations && Realizations?.length > 0 && (
            <FlatList
              data={Realizations}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              snapToOffsets={snapToOffsets}
            />
          )}
        </View>
      </FetchStateHandler>
    </View>
  );
}

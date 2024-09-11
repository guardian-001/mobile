import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { NoDataBox } from '@/assets/icons/archimatch/no-data-box';

import { NoData } from './list';
import { Text } from './text';
type Props = {
  isPending: boolean;
  isEmpty?: boolean;
  isError: boolean;
  isSuccess: boolean;
  children: React.ReactNode;
  type?: 'DEFAULT' | 'CUSTOM';
};

export const FetchStateHandler = React.memo(
  ({
    isPending,
    isEmpty,
    isError,
    isSuccess,
    children,
    type = 'DEFAULT',
  }: Props) => {
    return (
      <View className="flex-1">
        {(isError || isEmpty) && (
          <View className="flex flex-1 items-center justify-center">
            {type === 'CUSTOM' ? <NoDataBox /> : <NoData />}
            <Text className="pt-4 text-center">Sorry! No data found</Text>
          </View>
        )}
        {isPending && (
          <View className="flex flex-1 items-center justify-center">
            <ActivityIndicator />
          </View>
        )}
        {isSuccess && children}
      </View>
    );
  }
);

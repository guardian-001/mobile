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
      <View className="flex w-full items-center justify-center">
        {(isError || isEmpty) && (
          <>
            {type === 'CUSTOM' ? <NoDataBox /> : <NoData />}
            <Text className="pt-4 text-center">Sorry! No data found</Text>
          </>
        )}
        {isPending && <ActivityIndicator />}
        {isSuccess && children}
      </View>
    );
  }
);

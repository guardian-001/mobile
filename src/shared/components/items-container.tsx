import React from 'react';
import { View } from 'react-native';

import type { TxKeyPath } from '@/core';

import { Text } from './text';

type Props = {
  children: React.ReactNode;
  title?: TxKeyPath;
};

export const ItemsContainer = ({ children, title }: Props) => {
  return (
    <>
      {title && <Text className="pb-2 pt-4 text-base font-bold" tx={title} />}
      {
        <View className="h-fit rounded-2xl bg-white p-3 shadow-md  shadow-color-shadow">
          {children}
        </View>
      }
    </>
  );
};

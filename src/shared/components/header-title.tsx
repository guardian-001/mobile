import React from 'react';
import { Text, View } from 'react-native';

import type { TxKeyPath } from '@/core';
import { translate } from '@/core';
interface HeaderTitleProps {
  text: TxKeyPath;
}
export function HeaderTitle({ text }: HeaderTitleProps) {
  return (
    <View className="flex h-32 w-full items-center justify-end bg-white pb-6">
      <Text className="text-2xl font-bold text-primary-txt ">
        {translate(text)}
      </Text>
    </View>
  );
}

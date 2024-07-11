import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import type { TxKeyPath } from '@/core';
import { translate } from '@/core';
import colors from '@/theme/colors';

interface HeaderTitleProps {
  text: TxKeyPath;
  type: 'custom' | 'transparent' | 'default';
}

export function HeaderTitle({ text, type }: HeaderTitleProps) {
  return (
    <>
      {type === 'custom' ? (
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={[colors.background, colors['light-blue']]}
          className="flex h-[13%] w-full items-center justify-end bg-white pb-6"
        >
          <Text className="text-2xl font-bold text-primary-txt ">
            {translate(text)}
          </Text>
        </LinearGradient>
      ) : (
        <>
          {type === 'transparent' ? (
            <View className="flex h-[14%] w-full items-center justify-end bg-transparent pb-6">
              <Text className="text-2xl font-bold text-primary-txt ">
                {translate(text)}
              </Text>
            </View>
          ) : (
            <View className="flex h-[14%] w-full items-center justify-end bg-white pb-6">
              <Text className="text-2xl font-bold text-primary-txt ">
                {translate(text)}
              </Text>
            </View>
          )}
        </>
      )}
    </>
  );
}

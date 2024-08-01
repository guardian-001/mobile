import React from 'react';
import { Text, View } from 'react-native';

import type { TxKeyPath } from '@/core';
import { translate } from '@/core';

import { GradientBackground } from './gradient-background';

interface HeaderTitleProps {
  text: TxKeyPath;
  type: 'custom' | 'transparent' | 'default';
}

export function HeaderTitle({ text, type }: HeaderTitleProps) {
  return (
    <>
      {type === 'custom' ? (
        <GradientBackground style={{
          position: 'absolute',
          display: 'flex',
          height: '13%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
          backgroundColor: 'white'}}>
          <Text style={{
           marginTop: 40}} className="text-2xl font-bold text-primary-txt ">
            {translate(text)}
          </Text>
        </GradientBackground>
      ) : (
        <>
          {type === 'transparent' ? (
            <View className=" flex h-[14%] w-full items-center justify-end bg-transparent pb-6">
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

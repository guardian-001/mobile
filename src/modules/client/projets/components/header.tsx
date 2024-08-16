import React from 'react';

import { translate } from '@/core';
import { Text, View } from '@/shared/components';

import type { HeaderProps } from '../types';

export const Header = ({ formattedDate, status }: HeaderProps) => (
  <View className="flex flex-row justify-between">
    <Text className="text-xs text-description">
      {translate('projets.publishedOn')} {formattedDate}
    </Text>
    <View className="rounded bg-green-400 px-3 py-[2px]">
      <Text className="text-center text-sm text-primary-txt">{status}</Text>
    </View>
  </View>
);

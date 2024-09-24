import React from 'react';
import { TouchableOpacity } from 'react-native';

import TickIcon from '@/assets/icons/tick-icon';
import { colors, Image, Text, View } from '@/shared/components';
import { deepEqual } from '@/shared/utils';
import type { Need } from '@/types';

export default function ArchitectProfileService({
  need,
  handleSelect,
  selectedNeeds,
}: {
  need: Need;
  handleSelect: (need: Need) => void;
  selectedNeeds: Need[];
}) {
  return (
    <TouchableOpacity
      key={need.id}
      className="mb-3 w-11/12"
      onPress={() => handleSelect(need)}
    >
      <View
        className={`flex h-16 flex-row items-center justify-between gap-2 rounded-xl border border-color-border px-4 `}
      >
        <View className={`flex   flex-row items-center justify-start gap-2   `}>
          <Image
            className="mt-1 h-5 w-5"
            source={{ uri: need.icon }}
            contentFit="contain"
          />
          <Text className={`mt-1 text-start text-base font-semibold `}>
            {need.label}
          </Text>
        </View>
        {selectedNeeds.some((obj) => deepEqual(obj, need)) && (
          <View className="rounded-full bg-green-600">
            <TickIcon color={colors.white} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

import React from 'react';
import { Text, View } from 'react-native';

import { Image } from '@/shared/components';
import type { Need } from '@/types';
function ArchitectProfileNeed({ need }: { need: Need }) {
  return (
    <View
      key={need.id}
      className={`mb-2 flex h-16 flex-row items-center justify-start gap-2 rounded-xl border border-color-border px-4`}
    >
      <Image
        className="mt-1 h-5 w-5"
        source={{ uri: need.icon }}
        contentFit="contain"
      />
      <Text className="mt-1 text-start text-base font-semibold">
        {need.label}
      </Text>
    </View>
  );
}

export default ArchitectProfileNeed;

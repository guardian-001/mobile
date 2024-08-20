import React from 'react';
import { FlatList } from 'react-native';

import { View } from '@/shared/components';

import { projectList } from './dump-data';
import { useInspiration } from './hooks/use-inspiration';

export default function InspirationScrolling() {
  const { snapToOffsets, renderItem } = useInspiration();
  return (
    <View className="flex-1">
      <FlatList
        data={projectList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        snapToOffsets={snapToOffsets}
      />
    </View>
  );
}

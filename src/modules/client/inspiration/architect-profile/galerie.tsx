import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { projectList } from '../dump-data';
import { useGalerie } from './hooks/use-galerie';

export default function Galerie() {
  const { renderItem } = useGalerie();

  return (
    <FlatList
      data={projectList}
      renderItem={renderItem}
      contentContainerClassName="p-[16px] pb-0"
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
}

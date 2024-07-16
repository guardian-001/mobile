// RenderTimeSlots.tsx
import React from 'react';
import type { ListRenderItemInfo } from 'react-native';
import { FlatList, View } from 'react-native';

// Import the tailwind function
import { usePagination } from '@/shared/hooks';

import { TIMESLOTS } from '../constants/constants';
import { RenderItem, RenderPagination } from './';

type RenderTimeSlotsProps = {};

const ITEMS_PER_PAGE = 8;

export const RenderTimeSlots: React.FC<RenderTimeSlotsProps> = ({}) => {
  const { currentPage, totalPages, handlePageChange, paginatedItems } =
    usePagination<string>(TIMESLOTS.length, ITEMS_PER_PAGE);

  const paginatedTimeSlots = paginatedItems(TIMESLOTS);

  const renderItem = ({ item, index }: ListRenderItemInfo<string>) => (
    <RenderItem item={item} index={index} />
  );

  return (
    <View className="flex-1 items-center">
      <FlatList
        data={paginatedTimeSlots}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item}-${index}`}
        numColumns={4}
        className={'flex-1'}
        contentContainerClassName="justify-around"
        showsVerticalScrollIndicator={false}
      />
      <RenderPagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </View>
  );
};

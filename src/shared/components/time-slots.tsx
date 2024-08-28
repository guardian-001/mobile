import React from 'react';
import type { FieldValues } from 'react-hook-form';
import {
  type Control,
  type Path,
  type RegisterOptions,
  useController,
} from 'react-hook-form';
import type { ListRenderItemInfo } from 'react-native';
import { Dimensions, FlatList, View } from 'react-native';

import { usePagination } from '@/shared/hooks';

import { TIMESLOTS } from '../constants/constants';
import { useCalendar } from '../providers';
import { RenderPagination } from './pagination-time-slots';
import { ToggleButton } from './toggle-button';

type RenderTimeSlotsProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions;
};

const ITEMS_PER_PAGE = 8;
const { width } = Dimensions.get('window');

export const RenderTimeSlots = <T extends FieldValues>({
  name,
  control,
  rules,
}: RenderTimeSlotsProps<T>) => {
  const { selectedTime, handleTimePress } = useCalendar();
  const { currentPage, totalPages, handlePageChange, paginatedItems } =
    usePagination<string>(TIMESLOTS.length, ITEMS_PER_PAGE);

  const paginatedTimeSlots = paginatedItems(TIMESLOTS);

  const { field } = useController({ control, name, rules });
  const renderItem = ({ item }: ListRenderItemInfo<string>) => {
    const list = JSON.parse(item);
    const views: JSX.Element[] = [];

    Array.from({ length: 4 }).forEach((_, i) => {
      views.push(
        <View key={i}>
          {list.slice(i * 2, i * 2 + 2).map((timeSlot: string) => (
            <ToggleButton
              key={timeSlot}
              value={timeSlot}
              name={name}
              control={control}
              selectedValue={selectedTime}
              onSelect={() => {
                field.onChange(timeSlot);
                handleTimePress(timeSlot);
              }}
              style={{ width: width / 4 - 10 }}
            />
          ))}
        </View>
      );
    });

    return <>{views}</>;
  };

  const handleScrollEnd = (event: any) => {
    const pageIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    handlePageChange(pageIndex);
  };

  return (
    <View>
      <FlatList
        data={paginatedTimeSlots}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item}-${index}`}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={handleScrollEnd}
        showsHorizontalScrollIndicator={false}
      />
      <RenderPagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </View>
  );
};

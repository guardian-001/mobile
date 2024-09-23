import React from 'react';
import { FlatList } from 'react-native';

import { Emoji } from '@/assets/icons';
import { FetchStateHandler, Image, Text, View } from '@/shared/components';
import type { OldReview } from '@/types/architect';

import { useAvis } from './hooks/use-avis';

interface ReviewsProps {
  reviews: OldReview[];
}

const Reviews = ({ reviews }: ReviewsProps) => {
  const { Reviews, isError, isLoading, isSuccess } = useAvis();
  return (
    <FetchStateHandler
      isError={isError}
      isPending={isLoading}
      isEmpty={reviewsApiData?.length === 0}
      isSuccess={isSuccess}
    >
      <FlatList
        data={reviews}
        contentContainerClassName="p-4 pb-0"
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View className="flex-row gap-4 border-b border-dashed border-gray-200 py-2 ">
            <Image
              source={require('@/assets/images/architecteImage.jpg')}
              className="mt-2 h-12 w-12 rounded-full"
              contentFit="cover"
            />
            <View className="flex-1">
              <Text className="text-sm font-bold">{item.reviewer}</Text>
              <View className="my-1 flex-row items-center">
                <Emoji />
                <Text className="text-xs font-bold">{item.note}</Text>
                <View className="h-[3px] w-[30px] rounded-full bg-black" />
                <Text className="ml-2 text-xs text-description">
                  {item.date}
                </Text>
              </View>
              <Text className="text-sm">{item.comment}</Text>
            </View>
          </View>
        )}
      />
    </FetchStateHandler>
  );
};

export default Reviews;

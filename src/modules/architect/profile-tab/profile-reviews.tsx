import React from 'react';
import { View } from 'react-native';

import { EmptyList } from '@/shared/components/emptylist-custom';
import type { Review } from '@/types/architect';

import ReviewCard from './components/review-card';
import { useGetClientReview } from './hooks/use-profile-reviews';

export default function ProfileReviews() {
  const { isLoading, isSuccess, isError, isPending, clientsReviews } =
    useGetClientReview();

  return (
    <View className="mt-2 flex   w-full   items-center justify-center ">
      {isLoading ||
        (isSuccess && clientsReviews?.length === 0 && (
          <EmptyList
            isEmpty={isSuccess && clientsReviews?.length === 0}
            isError={isError}
            isPending={isPending}
          />
        ))}
      <View className="flex w-full   items-center gap-3 ">
        {isSuccess &&
          clientsReviews?.map((review: Review, index: number) => (
            <ReviewCard key={index} review={review} />
          ))}
      </View>
    </View>
  );
}

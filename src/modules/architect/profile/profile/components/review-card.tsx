import React from 'react';

import { Dot } from '@/assets/icons/archimatch/architect-profile-images/dot';
import { Report } from '@/assets/icons/archimatch/architect-profile-images/report';
import { ProfileReviewUser } from '@/assets/icons/archimatch/architect-profile-images/review-profile-user';
import { translate } from '@/core';
import { Button, colors, Modal, Text, View } from '@/shared/components';
import { formatDate } from '@/shared/utils';
import type { Review } from '@/types/architect';

import { useProfileReview } from '../hooks/use-profile-review-modal';

export default function ReviewCard({
  key,
  review,
}: {
  key: number;
  review: Review;
}) {
  const { ref, present, dismiss, onSubmit } = useProfileReview();
  return (
    <View className=" w-full   px-2" key={key}>
      <View className="flex flex-row justify-between gap-2 ">
        <ProfileReviewUser />
        <View className="flex flex-1 items-start justify-between   py-3   pr-1 ">
          <Text className="text-xl font-bold ">{`${review.client.user.lastName} ${review.client.user.firstName}`}</Text>
          <View className="flex flex-row  items-center justify-center gap-1">
            <Text className="text-xs font-bold ">Very good</Text>
            <Dot width={4} height={4} color={colors.description} />
            <Text className="text-xs text-description ">
              {formatDate(review.createdAt)}
            </Text>
          </View>
        </View>
        <View>
          <Button
            label={translate('common.report')}
            className=" h-12 w-32   "
            alternativeBg="bg-background"
            alternativeTextColor="color-primary-txt"
            textClassName={'text-base ml-2'}
            leftIcon={<Report />}
            onPress={present}
          />
        </View>
      </View>
      <View className="flex w-full items-end  justify-end px-6 py-2 ">
        <View className="w-10/12">
          <Text className=" w-full text-justify ">{review.comment}</Text>
        </View>
      </View>
      <Modal snapPoints={['30%']} ref={ref} onDismiss={dismiss}>
        <View className="flex w-full  items-center justify-center  ">
          <View className="mb-4 flex w-11/12  items-start justify-center  ">
            <Text
              tx="architectProfile.reviewDecisionTitle"
              className="mb-4 text-start text-2xl font-extrabold"
            />
            <Text
              tx="architectProfile.reviewDecisionDescription"
              className=" text-base  text-description"
            />
          </View>
          <View className="flex w-full flex-row items-center justify-center gap-4">
            <Button
              label={translate('common.ignore')}
              className=" h-12 w-2/5 rounded-md"
              alternativeBg="bg-background"
              alternativeTextColor="color-primary-txt"
              textClassName={'text-base'}
              onPress={dismiss}
            />
            <Button
              label={translate('common.publish')}
              className=" h-12 w-2/5 rounded-md"
              textClassName={'text-base'}
              onPress={onSubmit}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

import React from 'react';
import { ScrollView } from 'react-native';

import { BasicSubscription, PremiumSubscription } from '@/modules/shared';
import { Image, Text, View } from '@/shared/components';

export const SubscriptionManagement = () => {
  return (
    <View className="flex-1">
      <Image
        source={require('@/assets/images/subscription-image.png')}
        className="h-72 w-full"
      />
      <Text
        tx="supplierProfile.upgradeToPremium"
        className="-mt-8 text-center text-3xl font-extrabold"
      />
      <ScrollView
        className="mb-11 flex flex-1 gap-2 p-6 pb-8"
        contentContainerClassName="justify-center"
      >
        <BasicSubscription />
        <PremiumSubscription />
      </ScrollView>
    </View>
  );
};

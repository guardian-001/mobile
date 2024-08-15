import { useRouter } from 'expo-router';
import React from 'react';

import { translate } from '@/core';
import { Button, Image, Text, View } from '@/shared/components';

export const SubscriptionManagement = () => {
  const router = useRouter();
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
      <View className="flex-1 p-6 pb-8">
        <View className="flex-1" />
        <Button
          label={translate('common.subscribe')}
          onPress={() => {
            router.back();
          }}
          className="h-12 rounded-lg"
        />
      </View>
    </View>
  );
};

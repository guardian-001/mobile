import { useRouter } from 'expo-router';
import React from 'react';

import { Cover } from '@/assets/icons/cover';
import { ArrowRightLong } from '@/assets/icons/long-arrow-right';
import { Button, FocusAwareStatusBar, Text, View } from '@/shared/components';
import { useIsFirstTime } from '@/shared/hooks';
export default function Onboarding() {
  const [_, setIsFirstTime] = useIsFirstTime();
  const router = useRouter();
  return (
    <View className="flex h-full items-center justify-center  ">
      <FocusAwareStatusBar />
      <View className="w-full flex-1  bg-primary">
        <Cover />
      </View>
      <View className="justify-end ">
        <Text className="my-3 text-center text-5xl font-bold text-primary">
          Archimatch
        </Text>
        <Text className="mb-2 text-center text-lg text-gray-600">
          The right way to build your mobile app
        </Text>
      </View>

      <View className="mt-6 bg-primary">
        <Button
          type="default"
          icon={<ArrowRightLong />}
          label="Let's Get Started architect"
          onPress={() => {
            setIsFirstTime(false);
            router.replace('/(architect)/(public)/login');
          }}
        />
        <Button
          type="space"
          icon={<ArrowRightLong />}
          label="Let's Get Started client"
          onPress={() => {
            setIsFirstTime(false);
            router.replace('/(client)/(public)/login');
          }}
        />
        <Button
          type="space"
          icon={<ArrowRightLong />}
          label="Let's Get Started supplier"
          onPress={() => {
            setIsFirstTime(false);
            router.replace('/(supplier)/(public)/login');
          }}
        />
      </View>
    </View>
  );
}

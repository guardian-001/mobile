import { useRouter } from 'expo-router';
import React from 'react';

import { Cover } from '@/assets/icons/cover';
import {
  Button,
  FocusAwareStatusBar,
  SafeAreaView,
  Text,
  View,
} from '@/shared/components';
import { useIsFirstTime } from '@/shared/hooks';
export default function Onboarding() {
  const [_, setIsFirstTime] = useIsFirstTime();
  const router = useRouter();
  return (
    <View className="flex h-full items-center  justify-center">
      <FocusAwareStatusBar />
      <View className="w-full flex-1">
        <Cover />
      </View>
      <View className="justify-end ">
        <Text className="my-3 text-center text-5xl font-bold">Archimatch</Text>
        <Text className="mb-2 text-center text-lg text-gray-600">
          The right way to build your mobile app
        </Text>
      </View>

      <SafeAreaView className="mt-6">
        <Button
          label="Let's Get Started architect"
          onPress={() => {
            setIsFirstTime(false);
            router.replace('/(architect)/(public)/login');
          }}
        />
        <Button
          label="Let's Get Started client"
          onPress={() => {
            setIsFirstTime(false);
            router.replace('/(client)/(public)/login');
          }}
        />
        <Button
          label="Let's Get Started supplier"
          onPress={() => {
            setIsFirstTime(false);
            router.replace('/(supplier)/(public)/login');
          }}
        />
      </SafeAreaView>
    </View>
  );
}

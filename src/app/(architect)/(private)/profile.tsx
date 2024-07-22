import { useRouter } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

import { translate } from '@/core';
import { MainButton } from '@/modules/shared';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function Profile() {
  const router = useRouter();
  const onPressHandler = (route: string) => {
    router.push(route);
  };
  return (
    <View className="flex flex-1 items-center justify-center  ">
      <FocusAwareStatusBar />
      <Text className="font-lato text-2xl text-primary-txt">Profile</Text>
      <MainButton
        onPressHandler={() =>
          onPressHandler('(architect)/(private)/realize-project/')
        }
        label={translate('onBoarding.clientBtn')}
        type="button"
        width="w-[88%]"
        height="h-12"
      />
    </View>
  );
}

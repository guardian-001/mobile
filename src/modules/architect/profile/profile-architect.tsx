import React from 'react';
import { Text, View } from 'react-native';

import { translate } from '@/core';
import { MainButton } from '@/modules/shared';
import { FocusAwareStatusBar } from '@/shared/components';

import { useProfile } from './shared/hooks/use-profile';

export function ProfileArchitect() {
  const { onPressHandler, logoutHandler } = useProfile();
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
      <MainButton
        onPressHandler={() => logoutHandler('(architect)/(public)/login')}
        label={translate('common.logout')}
        type="button"
        width="w-[88%]"
        height="h-12"
      />
    </View>
  );
}

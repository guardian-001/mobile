import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { translate } from '@/core';
import { Text } from '@/shared/components';

export default function AuthFooter() {
  const router = useRouter();

  return (
    <View className="  flex h-20 w-full justify-start px-16 pt-2  ">
      <Text className="text-center  text-xs font-bold text-primary-txt">
        {translate('login.haveAccountQuestion')}
        <Text
          onPress={() => {
            router.replace('/(architect)/signup');
          }}
          className="text-xs font-bold text-primary"
        >
          {translate('login.signupLink')}
        </Text>
      </Text>
    </View>
  );
}

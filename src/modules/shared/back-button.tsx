import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { ArrowLeft } from '@/assets/icons/arrow-left';
import colors from '@/theme/colors';

export default function BackButton() {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => {
        router.back();
      }}
    >
      <View className="flex h-8 w-8 items-center justify-center rounded-full bg-white ">
        <ArrowLeft color={colors.gray[600]} />
      </View>
    </TouchableOpacity>
  );
}

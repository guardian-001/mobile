import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { ArrowLeft } from '@/assets/icons/arrow-left';
import colors from '@/theme/colors';
type RouteProp = {
  route?: string;
};
export default function BackButton({ route }: RouteProp) {
  const router = useRouter();
  const handleBack = () => {
    if (route) {
      router.replace(route);
    } else {
      router.back();
    }
  };
  return (
    <TouchableOpacity onPress={handleBack}>
      <View className="flex h-8 w-8 items-center justify-center rounded-full bg-white ">
        <ArrowLeft color={colors.gray[600]} />
      </View>
    </TouchableOpacity>
  );
}

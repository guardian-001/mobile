import { View } from 'moti';
import React from 'react';

import { Image } from '@/shared/components';

import WelcomeSupplier from './welcome-supplier';
export default function SupplierLoginHeader() {
  return (
    <View className="flex h-2/5 w-full items-center justify-end">
      <WelcomeSupplier />
      <Image
        source={require('@/assets/images/supplier-login-screen.png')}
        className=" h-56 w-full"
      />
    </View>
  );
}

import React from 'react';
import { Platform } from 'react-native';

import { Image, KeyboardAvoidingView, Text, View } from '@/shared/components';

export const CollectionManagement = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <View className="flex-row ">
        <Text
          tx="collection.manageCollections"
          className="my-8 text-lg font-extrabold"
        />
        <Image
          source={require('@/assets/images/architecteImage.jpg')}
          className="mb-3 h-24 w-24 rounded-full"
          contentFit="cover"
        />
      </View>
      <View className="mt-12 w-full flex-1 rounded-t-3xl bg-white" />
    </KeyboardAvoidingView>
  );
};

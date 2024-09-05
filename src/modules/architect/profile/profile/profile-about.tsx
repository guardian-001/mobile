import React from 'react';
import { View } from 'react-native';

import { translate } from '@/core';
import { ControlledInput, Text } from '@/shared/components';

import { useUpdateBio } from './hooks/use-update-bio';

export default function ProfileAbout() {
  const { control } = useUpdateBio();

  return (
    <View className="mt-2 flex h-20 w-11/12 flex-1  ">
      <ControlledInput
        testID="bio-input"
        control={control}
        name="bio"
        inputAreaType="textArea"
        label={translate('architectProfile.bioLabel')}
        placeholder={translate('architectProfile.bioPlaceholder')}
        className="flex-1"
      />
      <Text>About</Text>
    </View>
  );
}

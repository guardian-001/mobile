import { Stack } from 'expo-router';
import React from 'react';

import { ScreenOptions } from '@/shared/components';

export default function CollectionPrivateLayout() {
  return (
    <Stack initialRouteName="collection">
      <Stack.Screen
        name="collection"
        options={ScreenOptions({ backGesture: false })}
      />
    </Stack>
  );
}

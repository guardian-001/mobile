import { Stack } from 'expo-router';
import React from 'react';

import { ScreenOptions } from '@/shared/components';

export default function AnnouncementLayout() {
  return (
    <Stack initialRouteName="create-announcement">
      <Stack.Screen
        name="create-announcement"
        options={ScreenOptions({ type: 'custom' })}
      />
    </Stack>
  );
}

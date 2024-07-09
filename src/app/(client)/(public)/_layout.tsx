import { Stack } from 'expo-router';
import React from 'react';

import { BackButton } from '@/modules/shared';

import {LoginScreenOptions, ResetPasswordScreenOptions} from '@/shared/components';

export default function ClientPublicLayout() {
  return (
    <Stack initialRouteName="login">
      <Stack.Screen
        name="login"
        options={LoginScreenOptions}
      />
      <Stack.Screen
        name="reset-password"
        options={ResetPasswordScreenOptions}
      />
    </Stack>
  );
}

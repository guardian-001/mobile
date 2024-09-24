import React from 'react';

import BackButton from '@/modules/shared/back-button';
type ScreenOptionsProps = {
  route?: string;
  type?: 'default' | 'custom';
  backGesture?: boolean;
};

export const ScreenOptions = ({
  route,
  type = 'default',
  backGesture = true,
}: ScreenOptionsProps) => {
  if (type === 'default') {
    return {
      gestureEnabled: backGesture,
      headerTransparent: true,
      headerTitle: '',
      headerShown: true,
      headerLeft: () => <BackButton route={route} />,
    };
  } else {
    return {
      gestureEnabled: backGesture,
      headerShown: false,
    };
  }
};

import type { ExpoRouter } from 'expo-router/types/expo-router';
import * as React from 'react';

import { Notification, User } from '@/assets/icons';
import { View } from '@/shared/components';
import { Button } from '@/shared/components';

interface HeaderProps {
  appStatus: string | null;
  router: ExpoRouter.Router;
}

export const Header: React.FC<HeaderProps> = ({ appStatus, router }) => {
  return (
    <View className="p-4 pb-0">
      {appStatus ? (
        <View className="flex flex-row justify-between">
          <Button
            icon={<User color="white" />}
            onPress={() => {
              router.push(`/(client)/(profile)/profile`);
            }}
            className="my-6 h-12 w-12 rounded-lg"
          />
          <Button
            icon={<Notification />}
            onPress={() => {}}
            className="my-6 h-12 w-12 rounded-lg bg-white"
          />
        </View>
      ) : (
        <View className="h-10" />
      )}
    </View>
  );
};

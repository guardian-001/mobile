import { useRouter } from 'expo-router';
import React from 'react';

import { getStatus } from '@/core/auth/utils';
import { Button, FocusAwareStatusBar, View } from '@/shared/components';

export default function Explorer() {
  const router = useRouter();
  const status = getStatus();

  return (
    <View className="flex-1 ">
      <FocusAwareStatusBar />

      {status && (
        <Button
          label={'profile'}
          onPress={() => {
            router.push(`/(client)/(profile)/profile`);
          }}
          className="mt-20 h-12 rounded-md"
        />
      )}
    </View>
  );
}

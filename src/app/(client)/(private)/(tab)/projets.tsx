import { useRouter } from 'expo-router';
import React from 'react';

import { Button, FocusAwareStatusBar, View } from '@/shared/components';

export default function Projets() {
  const router = useRouter();
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <Button
        label={'login'}
        onPress={() => {
          router.push(`/(client)/(public)/login`);
        }}
        className="mt-20 h-12 rounded-md"
      />
    </View>
  );
}

import { useRouter } from 'expo-router';
import React from 'react';

import { getStatus } from '@/core/auth/utils';
import MesProjets from '@/modules/client/projets/projets';
import { Button, FocusAwareStatusBar, View } from '@/shared/components';

export default function Projets() {
  const router = useRouter();
  const status = getStatus();

  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      {status ? (
        <MesProjets />
      ) : (
        <Button
          label={'login'}
          onPress={() => {
            router.push(`/(client)/(public)/login`);
          }}
          className="mt-20 h-12 rounded-md"
        />
      )}
    </View>
  );
}

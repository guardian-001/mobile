import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';

import { getStatus } from '@/core/auth/utils';
import MyProjects from '@/modules/client/projets/projets';
import { Button, FocusAwareStatusBar, View } from '@/shared/components';

export default function Projets() {
  const router = useRouter();
  const [appStatus, setAppStatus] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      const status = await getStatus();
      setAppStatus(status?.toString() || null);
    };

    fetchStatus();
  }, []);
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      {appStatus ? (
        <MyProjects />
      ) : (
        <Button
          label={'login'}
          onPress={() => {
            router.replace(`/(client)/(public)/login`);
          }}
          className="mx-4 mt-20 h-12 rounded-md"
        />
      )}
    </View>
  );
}

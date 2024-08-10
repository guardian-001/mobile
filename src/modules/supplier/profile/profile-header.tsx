import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import type { User } from '@/api/auth';
import { getUser } from '@/core/auth/utils';
import { Text } from '@/shared/components';

export default function ProfileHeader() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const getUserData = async () => {
      const userDataObj = await getUser();
      setUser(userDataObj ?? null);
    };
    getUserData();
  }, []);
  return (
    <View>
      <Text>
        {user?.firstName} {user?.lastName}
      </Text>
    </View>
  );
}

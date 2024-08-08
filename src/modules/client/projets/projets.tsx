import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { Notification, User } from '@/assets/icons';
import { getStatus } from '@/core/auth/utils';
import {
  Button,
  colors,
  GradientBackground,
  ScrollView,
  Text,
  View,
} from '@/shared/components';

export default function MesProjets() {
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
    <ScrollView
      contentContainerClassName="min-h-full bg-white"
      showsVerticalScrollIndicator={false}
    >
      <GradientBackground
        colors={[colors.white, colors['extra-light-blue']]}
        style={styles.gradientBachgroud}
      >
        {appStatus ? (
          <View className="flex flex-row justify-between">
            <Button
              icon={<User color="white" />}
              onPress={() => {
                router.push(`/(client)/(profile)/profile`);
              }}
              className="my-8 h-12 w-12 rounded-lg"
            />
            <Button
              icon={<Notification />}
              onPress={() => {}}
              className="my-8 h-12 w-12 rounded-lg bg-white"
            />
          </View>
        ) : (
          <View className="h-10" />
        )}
        <Text className="mt-4 text-base font-bold" tx="explore.explore" />
      </GradientBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gradientBachgroud: { padding: 16, height: 330 },
});

import { useRouter } from 'expo-router';
import * as React from 'react';
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
  const status = getStatus();
  const router = useRouter();

  return (
    <ScrollView
      contentContainerClassName="min-h-full bg-white"
      showsVerticalScrollIndicator={false}
    >
      <GradientBackground
        colors={[colors.white, colors['extra-light-blue']]}
        style={styles.gradientBachgroud}
      >
        {status && (
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
        )}
        <Text className="mt-4 text-base font-bold" tx="explore.explore" />
      </GradientBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gradientBachgroud: { padding: 16, height: 330 },
});

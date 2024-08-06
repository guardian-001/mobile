import { useRouter } from 'expo-router';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import { getStatus } from '@/core/auth/utils';
import { StartProject } from '@/modules/shared';
import {
  Button,
  colors,
  GradientBackground,
  ScrollView,
  Text,
} from '@/shared/components';

export default function Home() {
  const router = useRouter();
  const status = getStatus();
  return (
    <ScrollView
      contentContainerClassName="min-h-full"
      showsVerticalScrollIndicator={false}
    >
      <GradientBackground
        colors={[colors.white, colors['extra-light-blue']]}
        style={styles.gradientBachgroud}
      >
        {status && (
          <Button
            label={'profile'}
            onPress={() => {
              router.push(`/(client)/(profile)/profile`);
            }}
            className="mt-20 h-12 rounded-md"
          />
        )}
        <StartProject />
        <Text className="mr-1 text-base font-bold" tx="explore.explore" />
      </GradientBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gradientBachgroud: { flex: 1, padding: 16 },
});

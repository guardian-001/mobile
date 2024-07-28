import React from 'react';
import { StyleSheet } from 'react-native';

import { ScrollView, Text, View } from '@/shared/components';
import { Calendar } from '@/shared/components';

export function DemoPlanning() {
  return (
    <ScrollView
      className="h-fit w-full"
      contentContainerStyle={styles.scrollContainer}
    >
      <View>
        <Text
          tx={'signupStepDemoPlanning.title'}
          className="mb-2 text-center text-2xl font-extrabold"
        />
        <Text
          tx={'signupStepDemoPlanning.description'}
          className="max-w-xs text-center text-sm text-description"
        />
      </View>

      <Calendar />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

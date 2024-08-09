import React from 'react';
import { StyleSheet } from 'react-native';

import { ScrollView, Text, View } from '@/shared/components';
import { Calendar } from '@/shared/components';
import { CalendarProvider } from '@/shared/providers/use-calendar-provider';

export function DemoPlanning() {
  return (
    <ScrollView
      className="h-fit w-full"
      contentContainerStyle={styles.scrollContainer}
    >
      <View className="mt-[12vh]">
        <Text
          tx={'signupStepDemoPlanning.title'}
          className="mb-2 text-center text-2xl font-extrabold"
        />
        <Text
          tx={'signupStepDemoPlanning.description'}
          className="max-w-xs text-center text-sm text-description"
        />
      </View>
      <CalendarProvider>
        <Calendar />
      </CalendarProvider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

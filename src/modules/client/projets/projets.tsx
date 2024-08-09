import React from 'react';
import { StyleSheet } from 'react-native';

import { Cube, Filter, Notification, User } from '@/assets/icons';
import { translate } from '@/core';
import {
  Button,
  colors,
  ControlledSelect,
  GradientBackground,
  ScrollView,
  Text,
  View,
} from '@/shared/components';

import { useMyProjects } from './hooks/use-project';

export default function MyProjects() {
  const { control, router, appStatus, statusOptions } = useMyProjects();
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
        <Text className="mt-4 text-base font-bold" tx="projets.headerTitle" />
      </GradientBackground>
      <View className="flex flex-row px-4">
        <View className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-light-blue">
          <Filter />
        </View>
        <View className="w-7/12">
          <ControlledSelect
            control={control}
            name="status"
            placeholder={translate('projets.status')}
            options={statusOptions}
            icon={<Cube />}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gradientBachgroud: { padding: 16 },
});

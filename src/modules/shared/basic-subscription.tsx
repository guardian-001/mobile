import React from 'react';
import { StyleSheet } from 'react-native';

import TickIcon from '@/assets/icons/tick-icon';
import { translate } from '@/core';
import {
  Button,
  colors,
  GradientBackground,
  Text,
  View,
} from '@/shared/components';

export default function BasicSubscription() {
  return (
    <GradientBackground
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[colors['lighter-blue-linear'], colors['light-blue-linear']]}
      style={styles.container}
    >
      <View className="flex gap-1">
        <Text
          tx="subscription.basic.basicTag"
          className="text-md text-start font-normal uppercase  text-primary"
        />
        <Text
          tx="subscription.basic.free"
          className="text-start text-3xl font-bold capitalize text-primary-txt"
        />
      </View>
      <View className="flex gap-1">
        <View className="flex flex-row items-center">
          <TickIcon color={colors.architect} />
          <Text
            tx="subscription.basic.descriptionOne"
            className="text-start text-xs font-light capitalize text-primary-txt"
          />
        </View>
        <View className="flex flex-row items-start">
          <TickIcon color={colors.architect} />
          <Text
            tx="subscription.basic.descriptionTwo"
            className="text-start text-xs font-light capitalize text-primary-txt"
          />
        </View>
      </View>
      <Button
        label={translate('subscription.subscribeBtn')}
        className="h-10 w-full rounded-lg"
      />
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    borderRadius: 24,
    padding: 24,
    justifyContent: 'space-between',
    gap: 20,
  },
});

import React from 'react';

import TickIcon from '@/assets/icons/tick-icon';
import { translate } from '@/core';
import { Button, colors, Text, View } from '@/shared/components';

export default function PremiumSubscription() {
  return (
    <View className="mb-10 mt-3 flex-1 items-start rounded-3xl bg-white p-6 shadow-sm shadow-color-shadow">
      <View className="flex gap-1">
        <Text
          tx="subscription.premium.basicTag"
          className="text-md text-start font-normal uppercase  text-primary"
        />
        <View className="flex flex-row items-end gap-1">
          <Text className="text-start text-3xl font-bold capitalize text-primary-txt">
            29.99
          </Text>
          <View className="flex flex-row items-center gap-1">
            <Text className="text-start text-xl font-bold uppercase text-primary-txt">
              DT
            </Text>
            <Text
              tx="subscription.premium.month"
              className="text-md text-start font-normal text-description"
            />
          </View>
        </View>
      </View>
      <View className="flex gap-1">
        <View className="flex flex-row items-center">
          <TickIcon color={colors.architect} />
          <Text
            tx="subscription.premium.descriptionOne"
            className="text-start text-xs font-light capitalize text-primary-txt"
          />
        </View>
        <View className="flex flex-row items-start">
          <TickIcon color={colors.architect} />
          <Text
            tx="subscription.premium.descriptionTwo"
            className="text-start text-xs font-light capitalize text-primary-txt"
          />
        </View>
        <View className="flex flex-row items-start">
          <TickIcon color={colors.architect} />
          <Text
            tx="subscription.premium.descriptionThree"
            className="text-start text-xs font-light capitalize text-primary-txt"
          />
        </View>
        <View className="flex flex-row items-start">
          <TickIcon color={colors.architect} />
          <Text
            tx="subscription.premium.descriptionFour"
            className="text-start text-xs font-light capitalize text-primary-txt"
          />
        </View>
        <View className="flex flex-row items-start">
          <TickIcon color={colors.architect} />
          <Text
            tx="subscription.premium.descriptionFive"
            className="text-start text-xs font-light capitalize text-primary-txt"
          />
        </View>
      </View>
      <Button
        label={translate('subscription.subscribeBtn')}
        className="h-10 w-full rounded-lg"
      />
    </View>
  );
}

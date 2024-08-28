import React from 'react';

import { translate } from '@/core';
import {
  Button,
  colors,
  GradientBackground,
  Image,
  Text,
  TouchableOpacity,
  View,
} from '@/shared/components';

import { architect } from '../dump-data/architect-profile';
import { useArchitectProfile } from './hooks/use-architect-profile';

export default function ArchitectProfile() {
  const { activeTab, tabs, renderContent, setActiveTab } =
    useArchitectProfile();
  return (
    <View className="flex-1 bg-white">
      <GradientBackground colors={[colors.white, colors['extra-light-blue']]}>
        <View className="flex items-center pb-3 pt-12">
          <Image
            source={require('@/assets/images/architecteImage.jpg')}
            className="mb-3 h-24 w-24 rounded-full"
            contentFit="cover"
          />
          <Text className="text-xl font-extrabold">
            {architect?.companyName}
          </Text>
          <Text className="text-sm font-medium text-primary">
            {architect?.architectSpeciality.label}
          </Text>
        </View>
      </GradientBackground>
      <View className="flex-1">
        <View className="flex-row justify-around">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const IconComponent = tab.icon;
            const color =
              activeTab === tab.id ? colors.client : colors.description;
            return (
              <TouchableOpacity
                key={tab.id}
                onPress={() => setActiveTab(tab.id)}
                className={`w-1/3 flex-row items-center justify-center gap-2 py-2 ${
                  isActive ? 'border-b-2 border-primary' : ''
                }`}
              >
                <IconComponent color={color} />
                <Text
                  tx={tab.label}
                  className={`font-bold ${
                    isActive ? 'text-primary' : 'text-description'
                  }`}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <View className="flex-1">{renderContent()}</View>
        <Button
          label={translate('inspiration.submitYourProject')}
          onPress={() => {}}
          textClassName="text-sm"
          className="my-2 h-12 w-[90%] self-center rounded-lg"
        />
      </View>
    </View>
  );
}

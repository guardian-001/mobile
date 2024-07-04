/* eslint-disable react/no-unstable-nested-components */
import { Tabs } from 'expo-router';
import React from 'react';

import { Feed as FeedIcon } from '@/assets/icons';

export default function ArchitectPrivateLayout() {
  return (
    <Tabs initialRouteName="index">
      <Tabs.Screen
        name="index"
        options={{
          title: 'Architect Space',
          tabBarIcon: ({ color }) => <FeedIcon color={color} />,
          tabBarTestID: 'feed-tab',
        }}
      />
    </Tabs>
  );
}

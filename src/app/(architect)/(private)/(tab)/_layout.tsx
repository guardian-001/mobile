/* eslint-disable react/no-unstable-nested-components */
import { Tabs } from 'expo-router';
import React from 'react';

import { Inspiration } from '@/assets/icons';
import { Profile } from '@/assets/icons/archimatch';
import { FindProject } from '@/assets/icons/archimatch/tab-architect/find-project';
import { Supplier } from '@/assets/icons/archimatch/tab-architect/supplier';

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="profile"
      screenOptions={{
        headerShown: false,

        tabBarItemStyle: {
          paddingBottom: 3,
        },
      }}
    >
      <Tabs.Screen
        name="find-project"
        options={{
          title: 'FindProject',
          tabBarIcon: ({ color }) => <FindProject color={color} />,
          tabBarTestID: 'catalogue-tab',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="monitoring"
        options={{
          title: 'Monitoring',
          tabBarIcon: ({ color }) => <Inspiration color={color} />,
          tabBarTestID: 'collection-tab',
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          tabBarIcon: ({ color }) => <Profile color={color} />,
          tabBarTestID: 'profile-tab',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="supplier"
        options={{
          title: 'supplier',
          tabBarIcon: ({ color }) => <Supplier color={color} />,
          tabBarTestID: 'supplier-tab',
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

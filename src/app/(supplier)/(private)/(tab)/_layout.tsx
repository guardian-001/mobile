/* eslint-disable react/no-unstable-nested-components */
import { Tabs } from 'expo-router';
import React from 'react';

import {
  Catalogue,
  Collection,
  PlusSupplier,
  Profile,
  ShareSupplier,
} from '@/assets/icons/archimatch';

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="(profile)"
      screenOptions={{
        tabBarItemStyle: {
          paddingBottom: 3,
        },
      }}
    >
      <Tabs.Screen
        name="catalogue"
        options={{
          title: 'catalogue',
          tabBarIcon: ({ color }) => <Catalogue color={color} />,
          tabBarTestID: 'catalogue-tab',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="collection"
        options={{
          title: 'collection',
          tabBarIcon: ({ color }) => <Collection color={color} />,
          tabBarTestID: 'collection-tab',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: '',
          href: '/',
          tabBarIcon: ({ color }) => <PlusSupplier color={color} />,
          tabBarTestID: 'add-tab',
          tabBarIconStyle: {
            paddingBottom: 20,
          },
          tabBarLabelStyle: {
            width: 90,
          },
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: 'profile',
          tabBarIcon: ({ color }) => <Profile color={color} />,
          tabBarTestID: 'profile-tab',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="share"
        options={{
          title: 'share',
          tabBarIcon: ({ color }) => <ShareSupplier color={color} />,
          tabBarTestID: 'share-tab',
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

/* eslint-disable react/no-unstable-nested-components */
import { Tabs } from 'expo-router';
import React from 'react';

import { Explore, Fournisseur, Inspiration, Projet } from '@/assets/icons';
import ConstructionHelmet from '@/assets/icons/construction-helmet';

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarItemStyle: {
          paddingBottom: 3,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explorer',
          tabBarIcon: ({ color }) => <Explore color={color} />,
          tabBarTestID: 'Explore-tab',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="inspiration"
        options={{
          title: 'Inspiration',
          tabBarIcon: ({ color }) => <Inspiration color={color} />,
          tabBarTestID: 'inspiration-tab',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: 'Lancer un projet',
          href: '/(client)/(private)/(announcement)/create-announcement',
          tabBarIcon: ({ color }) => <ConstructionHelmet color={color} />,
          tabBarTestID: 'home-tab',
          tabBarIconStyle: {
            paddingBottom: 20,
          },
          tabBarLabelStyle: {
            width: 90,
          },
        }}
      />
      <Tabs.Screen
        name="projets"
        options={{
          title: 'Projets',
          tabBarIcon: ({ color }) => <Projet color={color} />,
          tabBarTestID: 'projets-tab',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="fournisseur"
        options={{
          title: 'Fournisseur',
          tabBarIcon: ({ color }) => <Fournisseur color={color} />,
          tabBarTestID: 'fournisseur-tab',
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

/* eslint-disable react/no-unstable-nested-components */
import { Tabs } from 'expo-router';
import React from 'react';

import Fournisseur from '@/assets/icons/fournisseur';
import Inspiration from '@/assets/icons/inspiration';
import Projet from '@/assets/icons/projet';
import Search from '@/assets/icons/search';

export default function ClientPrivateLayout() {
  return (
    <Tabs initialRouteName="index">
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explorer',
          tabBarIcon: ({ color }) => <Search color={color} />,
          tabBarTestID: 'search-tab',
        }}
      />
      <Tabs.Screen
        name="projets"
        options={{
          title: 'Projets',
          tabBarIcon: ({ color }) => <Projet color={color} />,
          tabBarTestID: 'projets-tab',
        }}
      />
      <Tabs.Screen
        name="inspiration"
        options={{
          title: 'Inspiration',
          tabBarIcon: ({ color }) => <Inspiration color={color} />,
          tabBarTestID: 'inspiration-tab',
        }}
      />
      <Tabs.Screen
        name="fournisseur"
        options={{
          title: 'Fournisseur',
          tabBarIcon: ({ color }) => <Fournisseur color={color} />,
          tabBarTestID: 'fournisseur-tab',
        }}
      />
    </Tabs>
  );
}

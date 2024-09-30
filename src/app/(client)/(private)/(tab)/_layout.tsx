/* eslint-disable react/no-unstable-nested-components */
import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Explore, Fournisseur, Inspiration, Projet } from '@/assets/icons';
import ConstructionHelmet from '@/assets/icons/construction-helmet';
import colors from '@/theme/colors';

export default function TabLayout() {
  const router = useRouter();
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
          tabBarTestID: 'inspiration-tab',
          headerShown: false,
          tabBarButton: () => (
            <TouchableOpacity
              onPress={() =>
                router.push('/(client)/(private)/(inspiration)/inspiration')
              }
              className="w-24 items-center justify-around"
            >
              <Inspiration color={colors['bar-txt']} />
              <Text className="text-[10px] text-bar-txt ">Inspiration</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => <ConstructionHelmet color={color} />,
          tabBarTestID: 'home-tab',
          tabBarButton: () => (
            <TouchableOpacity
              onPress={() =>
                router.push(
                  '/(client)/(private)/(announcement)/create-announcement'
                )
              }
              className="-mt-6 w-24 items-center"
            >
              <ConstructionHelmet />
              <Text className="text-[10px] text-bar-txt ">
                Lancer un projet
              </Text>
            </TouchableOpacity>
          ),
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

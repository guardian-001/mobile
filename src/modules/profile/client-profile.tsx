import { useRouter } from 'expo-router';
import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  Flag,
  Help,
  Logout,
  Security,
  Settings,
  Terms,
  User,
} from '@/assets/icons';
import { translate, useAuth } from '@/core';
import {
  colors,
  HeaderTitle,
  Image,
  ImageContainer,
  Item,
  ItemsContainer,
  ScrollView,
  Text,
  View,
} from '@/shared/components';

import { Container, MainButton } from '../shared';

type Props = {};
export default function ClientProfile({}: Props) {
  const signOut = useAuth.use.signOut();
  const router = useRouter();
  const navigateTo = (path: string) => {
    router.push(`/(client)/(private)/${path}`);
  };
  return (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      colors={[colors.white, colors['extra-light-blue']]}
      className="flex-1"
    >
      <HeaderTitle text="profile.profile" type="default" />
      <ScrollView contentContainerClassName="p-6 pb-20 dark:bg-black">
        <Container style="flex flex-row w-full h-[30%] items-center bg-white dark:bg-primary-txt rounded-3xl px-5">
          <View className="flex h-4/5 w-7/12">
            <View className="flex flex-row">
              <Text
                className="mr-1 text-base font-bold"
                tx="onBoarding.welcomeTitle"
              />
              <Text
                className="text-base font-bold"
                tx="onBoarding.welcomeTitleSpan"
              />
            </View>
            <Container style=" w-[80%] my-1">
              <Text className={`text-xs`} tx="onBoarding.welcomeDescription" />
            </Container>
            <MainButton
              onPressHandler={() => {
                router.replace(
                  '(client)/(private)/(projet)/publication-projet'
                );
              }}
              label={translate('common.start')}
              type="button"
              width="w-[52%]"
              height="h-8"
            />
          </View>
          <ImageContainer className="flex h-4/5 w-5/12">
            <Image
              className="h-full w-full overflow-hidden rounded-xl"
              contentFit="cover"
              source={require('@/assets/start-screen-homes.gif')}
            />
          </ImageContainer>
        </Container>
        <ItemsContainer title="profile.account">
          <Item
            text="profile.info"
            icon={<User />}
            onPress={() => navigateTo(`(profile)/basic-information/`)}
          />
          <Item
            text="profile.notifications"
            icon={<Settings />}
            onPress={() => navigateTo(`(profile)/notification/`)}
          />
          <Item
            text="profile.password"
            icon={<Security />}
            onPress={() => navigateTo(`(profile)/reset-password-client/`)}
          />
        </ItemsContainer>
        <ItemsContainer title="profile.assistance">
          <Item text="profile.helpCenter" icon={<Help />} onPress={() => {}} />
          <Item text="profile.terms" icon={<Terms />} onPress={() => {}} />
          <Item text="profile.report" icon={<Flag />} onPress={() => {}} />
        </ItemsContainer>
        <ItemsContainer title="profile.connection">
          <Item text="profile.logout" icon={<Logout />} onPress={signOut} />
        </ItemsContainer>
      </ScrollView>
    </LinearGradient>
  );
}

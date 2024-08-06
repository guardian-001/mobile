import { useRouter } from 'expo-router';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { LogoArchi } from '@/assets/icons/archimatch';
import { translate } from '@/core';
import {
  GradientBackground,
  Image,
  ImageContainer,
  Text,
} from '@/shared/components';
import colors from '@/theme/colors';

import { MainButtons, OrDevider } from '../Components';
import { Container, MainButton } from '../shared';

export function StartScreen() {
  const router = useRouter();
  const onPressHandler = (route: string) => {
    router.push(route);
  };

  return (
    <GradientBackground
      colors={[colors['light-blue'], colors['extra-light-blue']]}
 
      style={styles.gradientBachgroud}
 
    >
      <Container style="flex-1 items-center justify-center w-full my-4 pt-5">
        <Container style="flex items-start justify-center w-[86%]">
          <ImageContainer className="flex-start mb-5 flex h-10 w-10 justify-center">
            <LogoArchi />
          </ImageContainer>
        </Container>
        <Container style="flex w-[86%] h-[50%] items-center mb-2 justify-between gap-3 bg-white rounded-3xl pb-5">
          <ImageContainer className="flex h-3/5 w-full items-center justify-center">
            <Image
              className="h-full w-full overflow-hidden rounded-t-xl"
              contentFit="cover"
              source={require('@/assets/start-screen-homes.gif')}
            />
          </ImageContainer>
          <View className="flex flex-row">
            <Text className={`font-lato text-2xl text-primary-txt md:text-4xl`}>
              {translate('onBoarding.welcomeTitle')}
            </Text>
            <Text
              className={`font-lato text-2xl font-bold text-primary-txt md:text-4xl`}
            >
              {` ${translate('onBoarding.welcomeTitleSpan')}`}
            </Text>
          </View>
          <Container style="items-center justify-center w-[80%]">
            <Text
              className={`text-center font-lato text-sm text-primary-txt md:text-lg`}
            >
              {translate('onBoarding.welcomeDescription')}
            </Text>
          </Container>
          <MainButton
            alternativeBg="bg-blue-500"
            onPressHandler={() => onPressHandler('(client)/(private)/(tab)/')}
            label={translate('onBoarding.clientBtn')}
            type="button"
            width="w-[88%]"
            height="h-12"
            backgroundColor='bg-blue-500'
          />
        </Container>
        s
        <OrDevider />
        <MainButtons />
      </Container>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  gradientBachgroud: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

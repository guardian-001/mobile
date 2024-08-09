import { useRouter } from 'expo-router';
import * as React from 'react';

import { translate } from '@/core';
import { Image, ImageContainer, Text, View } from '@/shared/components';

import Container from './container';
import MainButton from './main-button';

export default function StartProject() {
  const router = useRouter();
  return (
    <Container style="flex flex-row w-full h-48 items-center bg-white   rounded-3xl px-5">
      <View className="flex h-4/5 w-7/12">
        <View className="flex flex-row ">
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
          onPressHandler={() =>
            router.push(
              `/(client)/(private)/(announcement)/create-announcement`
            )
          }
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
  );
}

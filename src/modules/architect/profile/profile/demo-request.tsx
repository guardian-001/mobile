import React from 'react';
import { View } from 'react-native';

import { Dot } from '@/assets/icons/archimatch/architect-profile-images/dot';
import { VideoPresetationImage } from '@/assets/icons/archimatch/architect-profile-images/video-presetation-image';
import { translate } from '@/core';
import { Button, colors, Text } from '@/shared/components';

export default function DemoRequest() {
  return (
    <View className=" flex w-11/12 items-center rounded-2xl bg-white ">
      <VideoPresetationImage />
      <View className=" flex w-11/12 items-start rounded-2xl bg-white ">
        <Text
          tx="architectProfile.demoTitle"
          className="my-10 max-w-xs text-start text-2xl font-extrabold"
        />
        <Text
          tx="architectProfile.demoDescription"
          className="mb-5 mr-2 text-justify text-base text-description"
        />
        <View className=" flex   flex-row items-center justify-start gap-2">
          <Dot color={colors.architect} />
          <Text
            tx="architectProfile.demoDescriptionFirstInfo"
            className="mb-2 text-justify text-base text-description"
          />
        </View>
        <View className=" flex   flex-row items-center justify-start gap-2">
          <Dot color={colors.architect} />
          <Text
            tx="architectProfile.demoDescriptionSecondInfo"
            className="mb-2 text-justify text-base text-description"
          />
        </View>
        <View className=" flex   flex-row items-center justify-start gap-2">
          <Dot color={colors.architect} />
          <Text
            tx="architectProfile.demoDescriptionThirdInfo"
            className="mb-2 text-justify text-base text-description"
          />
        </View>
        <View className=" flex   flex-row items-center justify-start gap-2">
          <Dot color={colors.architect} />
          <Text
            tx="architectProfile.demoDescriptionFifthInfo"
            className="mb-2 text-justify text-base text-description"
          />
        </View>
      </View>
      <Button
        label={translate('architectProfile.demoButton')}
        className=" mt-10 h-12 w-10/12 rounded-lg "
        iconClassName="ml-2"
      />
    </View>
  );
}

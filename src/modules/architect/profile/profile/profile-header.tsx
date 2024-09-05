import React from 'react';
import { Pressable, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';

import { Settings, ShareDots } from '@/assets/icons';
import { Camera, Profile } from '@/assets/icons/archimatch';
import { translate } from '@/core';
import {
  Button,
  colors,
  GradientBackground,
  Image,
  Text,
} from '@/shared/components';

import { useProfileInfo } from './hooks/use-profile-info';

export default function ProfileHeader() {
  const { data, selectedProfileImage, onSubmitPickImage } = useProfileInfo();

  return (
    <View className=" flex h-96 flex-1  ">
      <View className=" flex h-full flex-1 items-end ">
        <GradientBackground
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[colors['lighter-blue-linear'], colors.background]}
          style={styles.container}
        >
          <View className="  flex  h-full w-full items-center justify-end ">
            <View className="flex h-36 w-36 items-center justify-center rounded-full bg-white p-2">
              <TouchableOpacity
                onPress={() => {
                  onSubmitPickImage();
                }}
                className=" absolute bottom-0 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary"
              >
                <Camera width={20} height={25} />
              </TouchableOpacity>
              {data?.companyLogo ? (
                <Image
                  source={selectedProfileImage}
                  className="  h-32 w-32 rounded-full"
                />
              ) : (
                <Pressable
                  onPress={() => {
                    onSubmitPickImage();
                  }}
                  className=" flex h-32 w-32 items-center justify-center rounded-full bg-gray-100 "
                >
                  <View className=" absolute -z-10 flex h-full w-full items-center justify-center ">
                    <Profile width={40} height={50} color={colors.gray[400]} />
                  </View>
                </Pressable>
              )}
            </View>
          </View>
        </GradientBackground>
      </View>
      <View className="flex-column mt-4 flex w-full items-start ">
        <Text className=" w-full text-center text-2xl font-semibold capitalize">
          {`${data?.user?.firstName} ${data?.user?.lastName}`}
        </Text>
        <Text className="mt-1 w-full text-center text-base font-semibold  text-main-project-blue">
          {`${data?.architectSpeciality?.label}`}
        </Text>
      </View>
      <View className="flex-column mt-4 flex w-full flex-row items-center justify-center gap-6 ">
        <Button
          label={translate('common.settings')}
          className=" h-12 w-32 rounded-xl"
          icon={<Settings color={colors.white} />}
        />
        <Button
          label={translate('common.settings')}
          className=" h-12 w-32 rounded-xl"
          alternativeBg="bg-secondary-btn"
          alternativeTextColor="color-primary-txt"
          iconClassName="ml-2"
          icon={<ShareDots />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

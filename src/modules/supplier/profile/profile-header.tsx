import React from 'react';
import { Pressable, TouchableOpacity, View } from 'react-native';

import { ImageUploader, Profile } from '@/assets/icons/archimatch';
import { Camera } from '@/assets/icons/archimatch/camera';
import { Pen } from '@/assets/icons/archimatch/pen';
import { colors, Image, Text } from '@/shared/components';

import { useProfileInfo } from './hooks/use-profile-info';

export default function ProfileHeader() {
  const { data, selectedCoverImage, selectedProfileImage, onSubmitPickImage } =
    useProfileInfo();

  return (
    <View>
      <View>
        {data?.coverImage ? (
          <Image source={selectedCoverImage} className=" h-56 bg-black" />
        ) : (
          <Pressable
            onPress={() => {
              onSubmitPickImage('cover');
            }}
            className=" flex h-56 items-center justify-center bg-gray-200"
          >
            <View className=" absolute  flex h-full w-full items-center justify-center ">
              <ImageUploader />
            </View>

            {/* <Text className=" text-lg font-semibold opacity-50">Cover Photo</Text> */}
          </Pressable>
        )}
        <TouchableOpacity
          onPress={() => {
            onSubmitPickImage('cover');
          }}
          className=" absolute bottom-0 right-0 m-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-400"
        >
          <Pen color={colors.gray[200]} width={20} height={25} />
        </TouchableOpacity>
      </View>
      <View className="  flex  w-full items-center justify-center  ">
        <View className=" -mt-16 flex h-36 w-36 items-center justify-center rounded-full bg-white p-2">
          <TouchableOpacity
            onPress={() => {
              onSubmitPickImage('profile');
            }}
            className=" absolute bottom-0 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary"
          >
            <Camera width={20} height={25} />
          </TouchableOpacity>
          {data?.profileImage ? (
            <Image
              source={selectedProfileImage}
              className="  h-32 w-32 rounded-full"
            />
          ) : (
            <Pressable
              onPress={() => {
                onSubmitPickImage('profile');
              }}
              className=" flex h-32 w-32 items-center justify-center rounded-full bg-gray-100 "
            >
              <View className=" absolute -z-10 flex h-full w-full items-center justify-center ">
                <Profile width={40} height={50} color={colors.gray[400]} />
              </View>

              {/* <Text className=" text-lg font-semibold opacity-50">Cover Photo</Text> */}
            </Pressable>
          )}
        </View>
      </View>
      <Text className="text-center text-2xl font-semibold capitalize">
        {data?.companyName}
      </Text>
    </View>
  );
}

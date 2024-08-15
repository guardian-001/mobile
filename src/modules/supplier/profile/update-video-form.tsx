import { ResizeMode } from 'expo-av';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import { Pen } from '@/assets/icons/archimatch/pen';
import { translate } from '@/core';
import { Button, colors, HeaderTitle, Text, Video } from '@/shared/components';
import { VideoUploader } from '@/shared/components';

import { useUpdateVideo } from './hooks/use-update-video';

export const UpdatePresentationVideoForm = () => {
  const { onSubmit, pickVideo, selectedVideo, newVideo, onDelete } =
    useUpdateVideo();
  return (
    <>
      <HeaderTitle text="profile.info" type="default" />
      <View className="flex-1 bg-white pt-5 ">
        <ScrollView
          className="flex-1"
          contentContainerClassName="gap-4 p-6 pt-12"
        >
          <Text
            tx="supplierProfile.video"
            className="mb-1 text-2xl font-extrabold"
          />
          <Text
            tx="supplierProfile.videoDescription"
            className="mb-4 text-base text-description"
          />
          {selectedVideo === null ? (
            <View className="flex w-full items-center justify-center">
              <VideoUploader pickVideo={pickVideo} />
            </View>
          ) : (
            <View>
              <Video
                className="h-64 w-full rounded-lg"
                source={{ uri: selectedVideo }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping={false}
              />
              <View className="flex w-full flex-row justify-end">
                <TouchableOpacity
                  onPress={pickVideo}
                  className="mx-2 my-4  flex h-16 w-16 items-center justify-center rounded-full bg-primary"
                >
                  <Pen color={colors.white} width={25} height={30} />
                </TouchableOpacity>

                <Button
                  label="X"
                  textClassName="text-xl"
                  onPress={onDelete}
                  className="mx-2 my-4 h-16 w-16  rounded-full"
                />
              </View>
            </View>
          )}
        </ScrollView>

        <Button
          label={translate('notification.save')}
          onPress={onSubmit}
          className="mx-4 mb-10 h-12 rounded-lg"
          disabled={!newVideo}
        />
      </View>
    </>
  );
};

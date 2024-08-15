import React from 'react';
import { ScrollView, View } from 'react-native';

import { translate } from '@/core';
import { Button, HeaderTitle, Text } from '@/shared/components';
import { VideoUploader } from '@/shared/components';

import { useUpdateVideo } from './hooks/use-update-video';

export const UpdatePresentationVideoForm = () => {
  const { onSubmit, pickVideo, selectedVideo, newVideo } = useUpdateVideo();
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
          {selectedVideo ? (
            ''
          ) : (
            <View className="flex w-full items-center justify-center">
              <VideoUploader pickVideo={pickVideo} />
            </View>
          )}
        </ScrollView>

        <Button
          label={translate('notification.save')}
          onPress={onSubmit}
          className="mx-4 mb-10 h-12 rounded-lg"
          disabled={newVideo}
        />
      </View>
    </>
  );
};

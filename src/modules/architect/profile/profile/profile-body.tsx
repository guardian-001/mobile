import React from 'react';
import { View } from 'react-native';

import { Tag } from '@/shared/components';

import { useProfileNavigator } from './hooks/use-profile-navigation';
import ProfileAbout from './profile-about';
import ProfileReviews from './profile-reviews';
import ProfileServices from './profile-services';
import ProfileSuggestion from './profile-suggestions';
import ProfileWork from './profile-work';

export default function ProfileBody() {
  const { tags, control, state } = useProfileNavigator();

  return (
    <View className="flex w-full flex-1 items-center ">
      <View className="flex w-full  flex-row items-center justify-center gap-2 bg-white py-2">
        {tags.map((tag) => {
          return (
            <Tag
              key={tag.id}
              label={tag.label}
              name="tag"
              id={tag.id}
              control={control}
              className="flex h-12 w-1/5 max-w-xl flex-row items-center justify-evenly"
              obligation={true}
              idValidation={true}
              background="bg-primary-txt"
            />
          );
        })}
      </View>
      <View className="flex w-full items-center justify-center">
        {String(state) === '0' && (
          <View className="flex h-max w-full items-center justify-center  ">
            <ProfileSuggestion />
            <ProfileWork />
          </View>
        )}
        {String(state) === '1' && <ProfileAbout />}
        {String(state) === '2' && <ProfileServices />}
        {String(state) === '3' && <ProfileReviews />}
      </View>
    </View>
  );
}

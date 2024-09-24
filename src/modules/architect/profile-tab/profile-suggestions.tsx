import React from 'react';
import { ScrollView, View } from 'react-native';

import { Eye } from '@/assets/icons/archimatch';
import { translate } from '@/core';
import { colors, ProgressBar, Text } from '@/shared/components';

import CardSuggestion from './components/card-suggestion';
import { useProfileSuggestion } from './hooks/use-profile-suggestion';

export default function ProfileSuggestion() {
  const {
    badgeImage,
    profileLevel,
    progressBarRef,
    profileCompletion,
    profileNextLevel,
    suggestionCardsData,
    activeIndex,
    handleScroll,
  } = useProfileSuggestion();

  return (
    <View className="relative mt-2 flex w-11/12">
      <Text className="text-base font-semibold">
        {translate('architectProfile.suggestionTitle')}
      </Text>
      <View className="mt-1 flex flex-row items-center gap-2 pl-1">
        <Eye width={12} color={colors.description} />
        <Text
          className="text-xs text-description"
          tx={'architectProfile.visibility'}
        />
      </View>
      <View className="mt-1 flex flex-row items-center gap-2 pl-1">
        <Text className="text-sm  font-bold uppercase">{profileLevel}</Text>
        {badgeImage}
      </View>
      <View className="mt-1 flex h-5 w-full flex-row items-center justify-center gap-2  pl-1">
        <ProgressBar ref={progressBarRef} className="w-11/12" />
        <Text className="text-sm  font-bold ">{profileCompletion}%</Text>
      </View>
      {profileNextLevel !== null && (
        <View className="mt-1 flex h-5 w-full flex-row  items-center justify-start gap-1  pl-1">
          <Text
            className="text-xs text-description"
            tx={'architectProfile.progressDescription'}
          />
          <Text className="text-xs  font-bold capitalize text-main-project-blue ">
            {profileNextLevel}
          </Text>
        </View>
      )}
      <View className="mt-2 flex w-full items-center justify-center">
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          contentContainerClassName="gap-x-2"
          onScroll={handleScroll}
          scrollEventThrottle={20}
        >
          {suggestionCardsData?.map((tag, index) => (
            <View key={index}>
              <CardSuggestion
                id={tag.id}
                title={tag.title}
                description={tag.description}
                button={tag.button}
              />
            </View>
          ))}
        </ScrollView>

        <View className="mt-2 flex-row">
          {suggestionCardsData?.map((_, index) => (
            <View
              key={index}
              className={`mx-1 h-2 w-2 rounded-full ${
                activeIndex === index ? 'bg-black' : 'bg-gray-400'
              }`}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

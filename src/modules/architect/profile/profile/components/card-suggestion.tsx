import React from 'react';

import { Button, Text, View } from '@/shared/components';

type CardSuggestionProps = {
  id: number;
  title: string;
  description: string;
  button: string;
};
export default function CardSuggestion({
  id,
  title,
  description,
  button,
}: CardSuggestionProps) {
  return (
    <View
      key={id}
      className="flex w-96 justify-between gap-4 rounded-2xl bg-white px-4 py-2"
    >
      <View className="  flex w-full flex-row items-center justify-between">
        <Text className="text-md mt-2 w-52 ">{title}</Text>
        <View className="mt-2 flex w-28 items-center justify-center rounded-lg bg-progress-background  py-3 ">
          <Text
            className="text-description"
            tx={'architectProfile.completer'}
          />
        </View>
      </View>
      <Text className="w-52 text-sm text-description">{description}</Text>
      <Button
        label={button}
        className=" h-12 w-32 rounded-xl border border-primary-txt"
        alternativeBg="bg-secondary-btn"
        alternativeTextColor="color-primary-txt"
        textClassName={'text-xs'}
      />
    </View>
  );
}

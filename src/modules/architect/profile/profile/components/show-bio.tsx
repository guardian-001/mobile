import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Pen } from '@/assets/icons/archimatch';
import { Text } from '@/shared/components';
import colors from '@/theme/colors';

export default function ShowBio({
  handleUpdateBioForm,
  bio,
}: {
  handleUpdateBioForm: () => void;
  bio: string;
}) {
  return (
    <View className="mb-4 ml-1 mr-2 flex   items-start">
      <View className="flex w-full flex-row justify-between">
        <Text
          tx={'architectProfile.bioLabel'}
          className="text-justify text-lg font-bold"
        />
        <TouchableOpacity
          onPress={handleUpdateBioForm}
          className="   flex h-10 w-10 items-center justify-center rounded-full bg-primary"
        >
          <Pen color={colors.white} />
        </TouchableOpacity>
      </View>
      <Text>{bio}</Text>
    </View>
  );
}

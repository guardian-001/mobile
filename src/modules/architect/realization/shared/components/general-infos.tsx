import React from 'react';

import { Text, View } from '@/shared/components';

import { useFinalStep } from '../hooks';

export default function GeneralInfos() {
  const { formData, categoryName, styleName } = useFinalStep();
  return (
    <View className="mt-10 flex w-full gap-5 ">
      <View className="flex w-full flex-row justify-between ">
        <View className="flex flex-1 justify-start">
          <Text
            tx={'realisation.finalStep.categorie'}
            className="mb-2 text-start text-sm  font-extrabold"
          />
          <Text className="mb-2 text-start text-sm font-extrabold  text-description">
            {categoryName}
          </Text>
        </View>
        <View className="flex flex-1 justify-start">
          <Text
            tx={'realisation.finalStep.localisation'}
            className="mb-2 text-start text-sm  font-extrabold"
          />
          <Text className="mb-2 text-start text-sm font-extrabold  text-description">
            {formData.city}
          </Text>
        </View>
      </View>
      <View className="flex w-full flex-row justify-between ">
        <View className="flex flex-1 justify-start">
          <Text
            tx={'realisation.finalStep.style'}
            className="mb-2 text-start text-sm  font-extrabold"
          />
          <Text className="mb-2 text-start text-sm font-extrabold  text-description">
            {styleName}
          </Text>
        </View>
        <View className="flex flex-1 justify-start">
          <Text
            tx={'realisation.finalStep.superficie'}
            className="mb-2 text-start text-sm  font-extrabold"
          />
          <Text className="mb-2 text-start text-sm font-extrabold  text-description">
            {formData.workSurface}
          </Text>
        </View>
      </View>
    </View>
  );
}

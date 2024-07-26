import { translate } from 'i18n-js';
import React from 'react';

import { ImageUploader } from '@/assets/icons/archimatch';
import { StepperButton } from '@/modules/shared';
import { Text, View } from '@/shared/components';

export default function ImagePicker() {
  return (
    <View className="flex w-11/12 items-center justify-center rounded-xl border border-dashed border-description">
      <View className="flex h-28 w-28  items-center justify-center">
        <ImageUploader />
      </View>
      <Text
        tx={'realisation.galleryStep.imgSelectorPlaceholder'}
        className="text-md max-w-xs text-center text-description"
      />
      <StepperButton
        width="w-[45%]"
        alternativeBg="bg-secondary-btn"
        alternativeTextStyle="color-primary-txt"
        label={translate('realisation.galleryStep.imgSelectorPlaceholder')}
        onPressHandler={() => {}} //uploadImages
      />
    </View>
  );
}

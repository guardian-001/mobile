import { View } from 'moti';
import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg from 'react-native-svg';

import { ImageUploaderDefs } from './image-uploader-defs';
import { ImageUploaderSvg } from './image-uploader-svg';

export const ImageUploader = (props: SvgProps) => {
  return (
    <View className="flex h-28 w-28 items-center justify-center">
      <Svg width={74} height={56} viewBox="0 0 74 56" fill="none" {...props}>
        <ImageUploaderSvg />
        <ImageUploaderDefs />
      </Svg>
    </View>
  );
};

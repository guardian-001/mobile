import { View } from 'moti';
import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Rect } from 'react-native-svg';

import colors from '@/theme/colors';

export const Dot = ({ color = colors.blue, ...props }: SvgProps) => {
  return (
    <View className="flex h-2 w-2  items-center justify-center  ">
      <Svg width="100%" height="100%" viewBox="0 0 6 6" fill="none" {...props}>
        <Rect width="6" height="6" rx="3" fill={color} />
      </Svg>
    </View>
  );
};

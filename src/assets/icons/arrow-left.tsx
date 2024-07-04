import { View } from 'moti';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/core';

export const ArrowLeft = ({ color, style, ...props }: SvgProps) => (
  <View className="h-4 w-2">
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 7 14"
      fill="none"
      {...props}
      style={StyleSheet.flatten([
        style,
        { transform: [{ scaleX: isRTL ? -1 : 1 }] },
      ])}
    >
      <Path
        d="M6.128 0.899a.874.874 0 0 0-.621.253L0.255 6.405a.875.875 0 0 0 0 1.234l5.252 5.252a.875.875 0 0 0 1.234-1.234L2.11 7.372l4.63-4.632A.876.876 0 0 0 6.128.9Z"
        fill={color}
      />
    </Svg>
  </View>
);

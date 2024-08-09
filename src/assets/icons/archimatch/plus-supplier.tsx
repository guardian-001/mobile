import React from 'react';
import { View } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Defs, G, Path, Rect } from 'react-native-svg';

export const PlusSupplier = (props: SvgProps) => (
  <View className="h-24 w-24">
    <Svg width="100%" height="100%" viewBox="0 0 90 91" fill="none" {...props}>
      <G filter="url(#filter0_dd_825_10106)">
        <Rect
          x={20}
          y={8.29492}
          width={50}
          height={50}
          rx={25}
          fill="#FC5C63"
        />
      </G>
      <Path
        d="M51.895 34.77a.85.85 0 000-1.7h-5.45v-5.45a.85.85 0 00-1.7 0v5.45h-5.45a.85.85 0 000 1.7h5.45v5.45a.85.85 0 001.7 0v-5.45h5.45z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.3}
      />
      <Defs />
    </Svg>
  </View>
);

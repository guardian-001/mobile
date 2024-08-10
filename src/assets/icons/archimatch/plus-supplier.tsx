import React from 'react';
import { View } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Defs, G, Path, Rect } from 'react-native-svg';

export const PlusSupplier = (props: SvgProps) => (
  <View className="h-28 w-28">
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 111 111"
      fill="none"
      {...props}
    >
      <G filter="url(#filter0_dd_1274_12238)">
        <Rect x={20} y={8} width={71} height={71} rx={35.5} fill="#FC5C63" />
      </G>
      <Path
        d="M68.6 45.55a1.55 1.55 0 000-3.1H57.55V31.4a1.55 1.55 0 00-3.1 0v11.05H43.4a1.55 1.55 0 000 3.1h11.05V56.6a1.55 1.55 0 003.1 0V45.55H68.6z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.3}
      />
      <Defs />
    </Svg>
  </View>
);

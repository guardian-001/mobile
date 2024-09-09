import { View } from 'moti';
import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';

export const Report = ({ color = colors.blue, ...props }: SvgProps) => {
  return (
    <View className="flex h-5 w-5 items-center justify-center   ">
      <Svg
        width="100%"
        height="100%"
        viewBox="0 0 17 17"
        fill="none"
        {...props}
      >
        <Path
          d="M8.025 8.875v0h.95v0-3a.475.475 0 00-.95 0v3zM8.5 16.1h0a7.609 7.609 0 007.6-7.6v0a7.6 7.6 0 10-7.6 7.6zm0-5.919a.569.569 0 100 1.138.569.569 0 000-1.138zm0 4.969a6.65 6.65 0 010-13.3 6.657 6.657 0 016.65 6.65 6.65 6.65 0 01-6.65 6.65z"
          fill={color}
          stroke={color}
          strokeWidth={0.2}
        />
      </Svg>
    </View>
  );
};

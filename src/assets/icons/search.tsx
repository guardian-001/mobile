import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';
export const Search = ({ color = colors.blue, ...props }: SvgProps) => {
  return (
    <Svg width={14} height={14} className="h-4 w-4" fill="none" {...props}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.903 11.184a4.903 4.903 0 1 0 0-9.805 4.903 4.903 0 0 0 0 9.805Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.273 10.651 13 13.38"
      />
    </Svg>
  );
};

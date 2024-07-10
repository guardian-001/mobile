import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';
export const Search = ({ color = colors.black, ...props }: SvgProps) => (
  <Svg className="h-6 w-6" fill="none" {...props}>
    <Path
      fill={color}
      d="m18.29 16.73-4.473-4.473a7.506 7.506 0 1 0-1.06 1.06l4.473 4.473a.75.75 0 0 0 1.06-1.06ZM8.018 13.513a5.995 5.995 0 1 1 5.995-5.995 6.002 6.002 0 0 1-5.995 5.995Z"
    />
  </Svg>
);

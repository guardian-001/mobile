import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';
export const Close = (props: SvgProps) => (
  <Svg className="h-5 w-5" fill="none" {...props}>
    <Path
      stroke={colors.blue}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m1 1 9 9M10 1l-9 9"
    />
  </Svg>
);

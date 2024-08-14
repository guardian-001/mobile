import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import colors from '@/theme/colors';

export const Site = ({ color = colors.blue, ...props }: SvgProps) => (
  <Svg className="h-6 w-8" fill="none" {...props}>
    <G
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <Path d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666Z" />
      <Path d="M6.667 2.5H7.5a23.687 23.687 0 0 0 0 15h-.833m5.833-15a23.686 23.686 0 0 1 0 15" />
      <Path d="M2.5 13.333V12.5a23.686 23.686 0 0 0 15 0v.833M2.5 7.5a23.687 23.687 0 0 1 15 0" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

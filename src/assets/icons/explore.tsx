import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';
export const Explore = ({ color = colors.black, ...props }: SvgProps) => (
  <Svg className="h-6 w-6" fill="none" {...props}>
    <Path
      fill={color}
      stroke={colors.white}
      strokeWidth={0.5}
      d="M19.304 8.167 13.3 2.157a3.963 3.963 0 0 0-5.598 0l-6.005 6.01A2.36 2.36 0 0 0 1 9.847v7.777A2.377 2.377 0 0 0 3.375 20h14.25A2.375 2.375 0 0 0 20 17.624V9.847a2.361 2.361 0 0 0-.696-1.68Zm-6.429 10.249h-4.75v-3.117a2.377 2.377 0 0 1 2.375-2.376 2.375 2.375 0 0 1 2.375 2.376v3.117Zm5.542-.792a.792.792 0 0 1-.792.792h-3.167v-3.117a3.962 3.962 0 0 0-3.958-3.96 3.957 3.957 0 0 0-3.958 3.96v3.117H3.375a.791.791 0 0 1-.792-.792V9.847c.001-.21.084-.411.232-.56L8.82 3.28a2.38 2.38 0 0 1 3.36 0l6.005 6.01c.147.148.23.348.232.557v7.777Z"
    />
  </Svg>
);

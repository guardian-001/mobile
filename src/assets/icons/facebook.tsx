import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const Facebook = ({ ...props }: SvgProps) => (
  <Svg className="h-8 w-8" fill="none" {...props}>
    <Path
      fill="#1877F2"
      d="M17 4.06a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13v-2.7a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5v-2.6Z"
    />
  </Svg>
);

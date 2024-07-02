import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const ArrowRightLong = ({ color = '#CCC', ...props }: SvgProps) => (
  <Svg width={12} height={6} fill="none" {...props}>
    <Path
      fill={color}
      d="M10.672 2 8.886.14A.461.461 0 0 0 8.558 0a.45.45 0 0 0-.328.14.483.483 0 0 0 0 .67l1.643 1.707H.462c-.123 0-.24.05-.327.14a.483.483 0 0 0 0 .672c.087.09.204.14.327.14h9.44L8.23 5.183a.476.476 0 0 0-.136.338.488.488 0 0 0 .136.337.461.461 0 0 0 .328.141.45.45 0 0 0 .328-.14l1.786-1.845c.26-.267.405-.63.405-1.008s-.146-.74-.405-1.008Z"
    />
  </Svg>
);

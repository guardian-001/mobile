import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const Close = (props: SvgProps) => (
  <Svg className="h-full w-full" fill="none" {...props}>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m1 1 9 9M10 1l-9 9"
    />
  </Svg>
);

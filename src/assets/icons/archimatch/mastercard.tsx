import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const MasterCard = (props: SvgProps) => (
  <Svg className="h-4 w-6" viewBox="0 0 23 15" fill="none" {...props}>
    <Path
      d="M6.571 14.053c3.63 0 6.572-2.934 6.572-6.553C13.143 3.88 10.2.947 6.57.947 2.942.947 0 3.88 0 7.5c0 3.62 2.942 6.553 6.571 6.553z"
      fill="#ED1C24"
    />
    <Path
      opacity={0.6}
      d="M16.429 14.053C20.058 14.053 23 11.12 23 7.5 23 3.88 20.058.947 16.43.947c-3.63 0-6.572 2.934-6.572 6.553 0 3.62 2.943 6.553 6.572 6.553z"
      fill="#FFA401"
    />
  </Svg>
);

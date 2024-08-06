import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';
export const Logout = (props: SvgProps) => {
  const color = colors.blue;
  return (
    <Svg className="h-6 w-6" fill="none" {...props}>
      <Path
        fill={color}
        stroke={color}
        strokeWidth={0.2}
        d="M8.812 12.9a.44.44 0 0 0 .315-.133l2.406-2.45L8.37 12.45h.1-.1c0 .247.197.45.443.45Zm0 0v-.1.1Zm1.339-3.35L8.498 7.868l-.001-.002a.455.455 0 0 1 .01-.635.44.44 0 0 1 .619 0v.002l2.407 2.45-.071.07-1.311-.203Zm0 0H4.344A.447.447 0 0 0 3.9 10c0 .247.197.45.444.45h5.807v-.9Zm.238.8-.098.1.098-.1Zm2.892-7.45H5.72C4.713 2.901 3.9 3.73 3.9 4.75v2.8c0 .247.197.45.444.45a.447.447 0 0 0 .443-.45v-2.8c.001-.526.42-.95.932-.95h7.562c.513 0 .93.424.931.95v10.5c0 .526-.418.95-.93.95H5.718a.942.942 0 0 1-.932-.95v-2.8a.447.447 0 0 0-.443-.45.447.447 0 0 0-.444.45v2.8c0 1.02.813 1.849 1.819 1.85h7.562c1.006-.001 1.818-.83 1.819-1.85V4.75c0-1.02-.813-1.849-1.819-1.85Z"
      />
    </Svg>
  );
};

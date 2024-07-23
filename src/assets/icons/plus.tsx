import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';
export const Plus = (props: SvgProps) => (
  <Svg className="h-4 w-4" fill="none" {...props}>
    <Path
      fill={colors.white}
      stroke={colors.white}
      strokeWidth={0.3}
      d="M5.582 1.397v4.35h-4.35a.9.9 0 1 0 0 1.8h4.35v4.35a.9.9 0 0 0 1.8 0v-4.35h4.35a.9.9 0 0 0 0-1.8h-4.35v-4.35a.9.9 0 0 0-.264-.636l-.01-.01-.013-.009-.083.125.083-.125h-.001L7.09.738 7.078.73a2.142 2.142 0 0 0-.38-.19.676.676 0 0 0-.216-.044.9.9 0 0 0-.9.9Z"
    />
  </Svg>
);

import * as React from 'react';
import { useColorScheme } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';
export const Help = (props: SvgProps) => {
  const colorScheme = useColorScheme();
  const color = colorScheme === 'dark' ? colors.white : colors.blue;
  return (
    <Svg className="h-6 w-6" fill="none" {...props}>
      <Path
        fill={color}
        stroke={color}
        strokeWidth={0.2}
        d="M13.75 11.052a.581.581 0 0 1-.005.82c-.044.043-1.074 1.044-2.745 1.044-1.67 0-2.7-1-2.744-1.044a.583.583 0 1 1 .822-.829c.026.027.746.706 1.922.706s1.896-.68 1.927-.709a.584.584 0 0 1 .823.012ZM8.959 9.416a.875.875 0 1 0-.001-1.75.875.875 0 0 0 0 1.75Zm4.083-1.75a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Zm4.959 2.532v3.885A2.92 2.92 0 0 1 15.084 17h-3.452c-4.084 0-7.357-2.796-7.615-6.502a7.016 7.016 0 0 1 2.03-5.445 7.027 7.027 0 0 1 5.441-2.037c3.652.248 6.513 3.402 6.513 7.182Zm-1.167 0c0-3.168-2.383-5.812-5.425-6.018a5.842 5.842 0 0 0-4.537 1.698 5.846 5.846 0 0 0-1.69 4.54c.216 3.138 2.93 5.416 6.45 5.416h3.452c.965 0 1.75-.785 1.75-1.75v-3.886Z"
      />
    </Svg>
  );
};

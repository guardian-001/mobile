import React from 'react';
import { View } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import colors from '@/theme/colors';

export const Catalogue = ({ color = colors.black, ...props }: SvgProps) => (
  <View className="h-7 w-7">
    <Svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" {...props}>
      <G clipPath="url(#clip0_825_10112)">
        <Path
          d="M11.732 2.94l.002.002 5.773 4.615s0 0 0 0c.218.176.429.48.569.847.14.367.186.735.14 1.013v.001l-1.107 6.63s0 0 0 0c-.152.888-1.044 1.642-1.942 1.642H5.833c-.906 0-1.79-.747-1.941-1.641 0 0 0 0 0 0L2.784 9.415h0l-.001-.004c-.048-.276-.005-.642.135-1.008s.351-.669.572-.845h.002l5.775-4.626h0c.663-.532 1.792-.533 2.466.008zm-3.915 8.008a2.684 2.684 0 105.368-.001 2.684 2.684 0 00-5.368.001z"
          stroke={color}
          fill={color}
          strokeWidth={1.2}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_825_10112">
          <Path fill="#fff" transform="translate(.5 .115)" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  </View>
);

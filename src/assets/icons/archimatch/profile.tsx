import React from 'react';
import { View } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';

export const Profile = ({ color = colors.black, ...props }: SvgProps) => (
  <View className="h-7 w-5">
    <Svg width="100%" height="100%" viewBox="0 0 13 19" fill="none" {...props}>
      <Path
        d="M6.633 8.756h-.067a.453.453 0 00-.15 0C4 8.681 2.175 6.781 2.175 4.44A4.332 4.332 0 016.5.115a4.332 4.332 0 014.325 4.325 4.31 4.31 0 01-4.167 4.316h-.025zM6.5 18.183c-1.633 0-3.275-.416-4.517-1.25C.825 16.167.192 15.117.192 13.975c0-1.142.633-2.2 1.791-2.975 2.5-1.658 6.55-1.658 9.034 0 1.15.767 1.791 1.817 1.791 2.958 0 1.142-.633 2.2-1.791 2.975-1.25.834-2.884 1.25-4.517 1.25z"
        fill={color}
      />
    </Svg>
  </View>
);

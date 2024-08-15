import React from 'react';
import { View } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export const Pen = (props: SvgProps) => {
  return (
    <View className="flex h-5 w-8  items-center justify-center  ">
      <Svg
        width="100%"
        height="100%"
        viewBox="0 0 20 30"
        fill="none"
        {...props}
      >
        <Path
          d="M10.11 18.504l4.808-4.807a6.688 6.688 0 01-2.162-1.452 6.687 6.687 0 01-1.453-2.163L6.496 14.89c-.375.375-.563.563-.724.77-.19.243-.354.507-.487.786-.112.237-.196.489-.364.992l-.885 2.654a.689.689 0 00.872.872l2.654-.885c.504-.168.755-.252.992-.364.28-.133.543-.296.787-.487.207-.161.394-.349.77-.724zm6.141-6.14a2.556 2.556 0 10-3.614-3.615l-.577.576.025.072a5.69 5.69 0 001.36 2.158 5.689 5.689 0 002.23 1.385l.576-.577z"
          fill={props.color}
        />
      </Svg>
    </View>
  );
};

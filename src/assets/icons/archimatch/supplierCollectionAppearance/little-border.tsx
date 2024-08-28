import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Defs, G, Rect } from 'react-native-svg';

import { LittleBorderHeader } from './little-border-header';

export const LittleBorder = (props: SvgProps) => (
  <Svg className="h-44 w-32" viewBox="0 0 133 184" fill="none" {...props}>
    <G filter="url(#filter0_dd_1441_13688)">
      <Rect x={20} y={8.01562} width={93} height={143} rx={8} fill="#fff" />
      <Rect
        x={20.5}
        y={8.51562}
        width={92}
        height={142}
        rx={7.5}
        stroke="#FC5C63"
      />
    </G>
    <LittleBorderHeader />
    <Rect
      x={29.001}
      y={132.011}
      width={16.9196}
      height={1.98334}
      rx={0.991668}
      fill="#888FA7"
      fillOpacity={0.08}
    />
    <Rect
      x={29.001}
      y={91.7435}
      width={33}
      height={33}
      rx={2}
      fill="#888FA7"
      fillOpacity={0.08}
    />
    <Defs />
  </Svg>
);

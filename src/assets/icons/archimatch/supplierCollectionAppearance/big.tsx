import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Defs, G, Rect } from 'react-native-svg';

import { BigHeader } from './big-header';

export const Big = (props: SvgProps) => (
  <Svg
    className="h-44 w-32 shadow-md shadow-color-shadow"
    viewBox="0 0 133 184"
    fill="none"
    {...props}
  >
    <G filter="url(#filter0_dd_1441_13688)">
      <Rect x={20} y={8.01562} width={93} height={143} rx={8} fill="#fff" />
    </G>
    <BigHeader />
    <Rect
      x={29.001}
      y={79.0111}
      width={16.9196}
      height={1.98334}
      rx={0.991668}
      fill="#888FA7"
      fillOpacity={0.08}
    />
    <Rect
      x={29.001}
      y={38.7435}
      width={33}
      height={33}
      rx={2}
      fill="#888FA7"
      fillOpacity={0.08}
    />
    <Rect x={26.001} y={89.016} width={39} height={48} rx={2} fill="#FAFBFF" />
    <Rect
      x={29.001}
      y={128.028}
      width={26.3982}
      height={1.98361}
      rx={0.991805}
      fill="#888FA7"
      fillOpacity={0.08}
    />
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

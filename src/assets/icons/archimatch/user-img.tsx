import type { SvgProps } from 'react-native-svg';
import Svg, { ClipPath, Defs, G, Rect } from 'react-native-svg';

export const UserImg = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <G clipPath="url(#clip0_1084_8339)">
      <Rect width={32} height={32} rx={16} fill="#D9F1FF" />
      <Rect x={9} y={6} width={14} height={14} rx={7} fill="#11ABEC" />
      <Rect x={-8} y={21} width={48} height={48} rx={24} fill="#11ABEC" />
    </G>
    <Defs>
      <ClipPath id="clip0_1084_8339">
        <Rect width={32} height={32} rx={16} fill="#fff" />
      </ClipPath>
    </Defs>
  </Svg>
);

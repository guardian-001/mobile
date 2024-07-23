import type { SvgProps } from 'react-native-svg';

export type sharedType = {
  id: number;
  label: string;
  icon: React.FunctionComponent<SvgProps>;
};
export type preferredStyleType = {
  id: number;
  label: string;
};
export type workType = {
  id: number;
  header: string;
  description: string;
};

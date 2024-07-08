import React from 'react';
import { View } from 'react-native';
interface ContainerProps {
  style?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ style, children }) => {
  return <View className={style}>{children}</View>;
};

Container.defaultProps = {
  style: 'flex-1 items-center justify-center',
};

export default Container;

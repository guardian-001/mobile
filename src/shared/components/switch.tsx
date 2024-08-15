import { MotiView } from 'moti';
import React from 'react';
import { I18nManager, View } from 'react-native';

import colors from '@/theme/colors';

import { useRouteName } from '../hooks';
import { type IconProps, Root, type RootProps } from './checkbox';
import { Text } from './text';

type LabelProps = {
  text: string;
  className?: string;
  testID?: string;
};

const Label = ({ text, testID, className = '' }: LabelProps) => {
  return (
    <Text testID={testID} className={` ${className} pl-2`}>
      {text}
    </Text>
  );
};

export const SwitchIcon = ({ checked = false }: IconProps) => {
  const translateX = checked ? 4 : 24;

  const space = useRouteName();
  const backgroundColor = checked
    ? space === 'architect' || space === 'supplier'
      ? colors.architect
      : colors.client
    : colors.gray[600];
  return (
    <View className="w-14 justify-center">
      <View className="overflow-hidden rounded-full">
        <View
          style={{
            backgroundColor,
          }}
          className="h-8 w-16"
        />
      </View>
      <MotiView
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          borderRadius: 13,
          right: 0,
        }}
        className="h-6 w-6"
        animate={{
          translateX: I18nManager.isRTL ? translateX : -translateX,
        }}
        transition={{ translateX: { overshootClamping: true } }}
      />
    </View>
  );
};
const SwitchRoot = ({ checked = false, children, ...props }: RootProps) => {
  return (
    <Root checked={checked} accessibilityRole="switch" {...props}>
      {children}
    </Root>
  );
};

const SwitchBase = ({
  checked = false,
  testID,
  label,
  ...props
}: RootProps & { label?: string }) => {
  return (
    <SwitchRoot checked={checked} testID={testID} {...props}>
      <SwitchIcon checked={checked} />
      {label ? (
        <Label text={label} testID={testID ? `${testID}-label` : undefined} />
      ) : null}
    </SwitchRoot>
  );
};

export const Switch = Object.assign(SwitchBase, {
  Icon: SwitchIcon,
  Root: SwitchRoot,
  Label,
});

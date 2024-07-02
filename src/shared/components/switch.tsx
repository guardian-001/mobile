import { MotiView } from 'moti';
import React from 'react';
import { I18nManager, View } from 'react-native';

import colors from '@/theme/colors';

import type { IconProps, RootProps } from './checkbox';
import { Root } from './checkbox';
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
  const translateX = checked ? 4 : 50 - 22 - 4;

  const backgroundColor = checked ? colors.primary[300] : colors.charcoal[400];

  return (
    <View className="w-[50px] justify-center">
      <View className="overflow-hidden rounded-full">
        <View
          style={{
            width: 50,
            height: 28,
            backgroundColor,
          }}
        />
      </View>
      <MotiView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 22,
          width: 22,
          position: 'absolute',
          backgroundColor: 'white',
          borderRadius: 13,
          right: 0,
        }}
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

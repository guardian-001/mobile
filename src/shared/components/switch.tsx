import { MotiView } from 'moti';
import React from 'react';
import { I18nManager, View } from 'react-native';

import colors from '@/theme/colors';

import type { IconProps, RootProps } from './checkbox';
import { Root } from './checkbox';
import { Text } from './text';

const WIDTH = 50;
const HEIGHT = 28;
const THUMB_HEIGHT = 22;
const THUMB_WIDTH = 22;
const THUMB_OFFSET = 4;

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
  const translateX = checked
    ? THUMB_OFFSET
    : WIDTH - THUMB_WIDTH - THUMB_OFFSET;

  const backgroundColor = checked ? colors.primary[300] : colors.charcoal[400];

  return (
    <View className="w-[50px] justify-center">
      <View className="overflow-hidden rounded-full">
        <View
          style={{
            width: WIDTH,
            height: HEIGHT,
            backgroundColor,
          }}
        />
      </View>
      <MotiView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: THUMB_HEIGHT,
          width: THUMB_WIDTH,
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

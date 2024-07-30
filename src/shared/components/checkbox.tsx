import { MotiView } from 'moti';
import React, { useCallback } from 'react';
import Svg, { Path } from 'react-native-svg';

import { type TxKeyPath, useRouteName } from '@/core';
import colors from '@/theme/colors';

import { Pressable, type PressableProps, View } from './';
import { Text } from './text';

export interface RootProps extends Omit<PressableProps, 'onPress'> {
  onChange: (checked: boolean) => void;
  checked?: boolean;
  className?: string;
  complex?: boolean;
  accessibilityLabel: string;
  error?: TxKeyPath;
}

export type IconProps = {
  checked: boolean;
  complex?: boolean;
};

export const Root = ({
  checked = false,
  children,
  onChange,
  disabled,
  className = '',
  error,
  ...props
}: RootProps) => {
  const handleChange = useCallback(() => {
    onChange(!checked);
  }, [onChange, checked]);

  return (
    <View className="flex-1">
      <Pressable
        onPress={handleChange}
        className={`flex-row items-center ${className} ${
          disabled ? 'opacity-50' : ''
        }`}
        accessibilityState={{ checked }}
        disabled={disabled}
        {...props}
      >
        {children}
      </Pressable>
      {error && (
        <Text className="text-xs text-error dark:text-error" tx={error} />
      )}
    </View>
  );
};

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

export const CheckboxIcon = ({
  checked = false,
  complex = false,
}: IconProps) => {
  const space = useRouteName();
  const color = checked
    ? space === ('architect' || 'supplier')
      ? colors.architect
      : colors.client
    : colors.gray[600];
  return (
    <MotiView
      style={{
        borderColor: color,
      }}
      className="h-6 w-6 items-center justify-center rounded-[5px] border-2"
      from={{ backgroundColor: 'transparent', borderColor: colors.gray[600] }}
      animate={{
        backgroundColor: checked ? color : 'transparent',
        borderColor: color,
      }}
      transition={
        complex
          ? {
              backgroundColor: { type: 'timing', duration: 0 },
              borderColor: { type: 'timing', duration: 0 },
            }
          : {
              backgroundColor: { type: 'timing', duration: 100 },
              borderColor: { type: 'timing', duration: 100 },
            }
      }
    >
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: checked ? 1 : 0 }}
        transition={
          complex
            ? { opacity: { type: 'timing', duration: 0 } }
            : { opacity: { type: 'timing', duration: 100 } }
        }
      >
        <Svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
          <Path
            d="m16.726 7-.64.633c-2.207 2.212-3.878 4.047-5.955 6.158l-2.28-1.928-.69-.584L6 12.66l.683.577 2.928 2.477.633.535.591-.584c2.421-2.426 4.148-4.367 6.532-6.756l.633-.64L16.726 7Z"
            fill="#fff"
          />
        </Svg>
      </MotiView>
    </MotiView>
  );
};

const CheckboxRoot = ({
  checked = false,
  complex = false,
  children,
  ...props
}: RootProps) => {
  return (
    <Root
      checked={checked}
      complex={complex}
      accessibilityRole="checkbox"
      {...props}
    >
      {children}
    </Root>
  );
};

const CheckboxBase = ({
  checked = false,
  testID,
  label,
  complex = false,
  ...props
}: RootProps & { label?: string }) => {
  return (
    <CheckboxRoot
      checked={checked}
      complex={complex}
      testID={testID}
      {...props}
    >
      <CheckboxIcon checked={checked} complex={complex} />
      {label ? (
        <Label
          text={label}
          testID={testID ? `${testID}-label` : undefined}
          className="pr-2  text-xs md:text-lg"
        />
      ) : null}
    </CheckboxRoot>
  );
};

export const Checkbox = Object.assign(CheckboxBase, {
  Icon: CheckboxIcon,
  Root: CheckboxRoot,
  Label,
});

import { MotiView } from 'moti';
import React from 'react';

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

export const RadioIcon = ({ checked = false }: IconProps) => {
  const color = checked ? colors.primary[300] : colors.gray[600];
  return (
    <MotiView
      style={{
        borderColor: color,
      }}
      className="h-6 w-6 items-center justify-center rounded-[20px] border-2 bg-transparent"
      from={{ borderColor: colors.gray[600] }}
      animate={{
        borderColor: color,
      }}
      transition={{ borderColor: { duration: 100, type: 'timing' } }}
    >
      <MotiView
        className={`h-3 w-3 rounded-[10px] ${checked && 'bg-primary-300'} `}
        from={{ opacity: 0 }}
        animate={{ opacity: checked ? 1 : 0 }}
        transition={{ opacity: { duration: 50, type: 'timing' } }}
      />
    </MotiView>
  );
};

const RadioRoot = ({ checked = false, children, ...props }: RootProps) => {
  return (
    <Root checked={checked} accessibilityRole="radio" {...props}>
      {children}
    </Root>
  );
};

const RadioBase = ({
  checked = false,
  testID,
  label,
  ...props
}: RootProps & { label?: string }) => {
  return (
    <RadioRoot checked={checked} testID={testID} {...props}>
      <RadioIcon checked={checked} />
      {label ? (
        <Label text={label} testID={testID ? `${testID}-label` : undefined} />
      ) : null}
    </RadioRoot>
  );
};

export const Radio = Object.assign(RadioBase, {
  Icon: RadioIcon,
  Root: RadioRoot,
  Label,
});

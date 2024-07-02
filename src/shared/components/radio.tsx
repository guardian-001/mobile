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
  const color = checked ? colors.primary[300] : colors.charcoal[400];
  return (
    <MotiView
      style={{
        height: 20,
        width: 20,
        borderColor: color,
      }}
      className="items-center justify-center rounded-[20px] border-2 bg-transparent"
      from={{ borderColor: '#CCCFD6' }}
      animate={{
        borderColor: color,
      }}
      transition={{ borderColor: { duration: 100, type: 'timing' } }}
    >
      <MotiView
        className={`h-[10px] w-[10px] rounded-[10px] ${
          checked && 'bg-primary-300'
        } `}
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

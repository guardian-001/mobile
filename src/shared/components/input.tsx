import clsx from 'clsx';
import * as React from 'react';
import type { TextInput, TextInputProps } from 'react-native';
import { I18nManager, StyleSheet, View } from 'react-native';
import { TextInput as NTextInput } from 'react-native';
import { tv } from 'tailwind-variants';

import type { TxKeyPath } from '@/core';

import colors from '../../theme/colors';
import { Text } from './text';

const inputTv = tv({
  slots: {
    container: 'mb-2',
    label: 'mb-1 text-base font-medium text-primary-txt  md:text-lg',

    input:
      'mt-0 h-12 rounded-lg border border-description bg-white px-4 py-3 font-lato text-base font-medium leading-5  md:text-lg',
  },

  variants: {
    focused: {
      true: {
        input: 'border-neutral-400 ',
      },
    },
    error: {
      true: {
        input: 'border-error',
        label: 'text-error ',
      },
    },
    disabled: {
      true: {
        input: 'bg-neutral-200',
      },
    },
  },
  defaultVariants: {
    focused: false,
    error: false,
    disabled: false,
  },
});

export interface NInputProps extends TextInputProps {
  label?: string;
  labelStyle?: string;
  disabled?: boolean;
  required?: boolean;
  error?: TxKeyPath;
  className?: string;
  inputAreaType?: 'textInput' | 'textArea';
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<TextInput, NInputProps>((props, ref) => {
  const {
    label,
    error,
    testID,
    className,
    labelStyle,
    disabled = false,
    required = false,
    inputAreaType = 'textInput',
    icon,
    ...inputProps
  } = props;
  const [isFocussed, setIsFocussed] = React.useState(false);
  const onBlur = React.useCallback(() => setIsFocussed(false), []);
  const onFocus = React.useCallback(() => setIsFocussed(true), []);

  const styles = React.useMemo(
    () =>
      inputTv({
        error: Boolean(error),
        focused: isFocussed,
        disabled: Boolean(props.disabled),
      }),
    [error, isFocussed, props.disabled]
  );

  return (
    <View className={styles.container({ className })}>
      {label && (
        <View className="flex w-full flex-row justify-start">
          <Text
            testID={testID ? `${testID}-label` : undefined}
            className={clsx(
              styles.label(),
              labelStyle ? labelStyle : 'text-base',
              disabled && 'text-description'
            )}
          >
            {label}
          </Text>
          {required && <Text className="text-primary">*</Text>}
        </View>
      )}
      {icon && (
        <View
          style={{
            transform: I18nManager.isRTL ? 'rotate(180deg)' : '',
          }}
          className="absolute inset-y-0 left-0  z-10 w-10 items-center justify-center"
        >
          {icon}
        </View>
      )}
      <NTextInput
        multiline={inputAreaType === 'textArea'}
        numberOfLines={4}
        testID={testID}
        ref={ref}
        placeholderTextColor={colors.neutral[400]}
        className={clsx(
          styles.input(),
          inputAreaType === 'textArea' && 'h-40',
          icon && 'pl-10'
        )}
        onBlur={onBlur}
        onFocus={onFocus}
        aria-disabled={disabled}
        {...inputProps}
        style={StyleSheet.flatten([
          { writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' },
          inputProps.style,
        ])}
        showSoftInputOnFocus={!disabled}
        caretHidden={disabled}
      />
      {error && (
        <Text
          testID={testID ? `${testID}-error` : undefined}
          className="text-xs text-error"
          tx={error}
        />
      )}
    </View>
  );
});

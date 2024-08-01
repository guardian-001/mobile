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
    label:
      'mb-1 text-base font-medium text-primary-txt dark:text-white md:text-lg',

    input:
      'mt-0 h-12 rounded-lg border border-description bg-white px-4 py-3 font-lato text-base font-medium leading-5 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white md:text-lg',
  },

  variants: {
    focused: {
      true: {
        input: 'border-neutral-400 dark:border-neutral-300',
      },
    },
    error: {
      true: {
        input: 'border-error',
        label: 'text-error dark:text-error',
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
}

export const Input = React.forwardRef<TextInput, NInputProps>((props, ref) => {
  const {
    label,
    error,
    testID,
    className,
    labelStyle,
    required = false,
    inputAreaType = 'textInput',
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
              labelStyle ? labelStyle : 'text-base'
            )}
          >
            {label}
          </Text>
          {required && <Text className="text-primary">*</Text>}
        </View>
      )}
      <NTextInput
        multiline={inputAreaType === 'textArea'}
        numberOfLines={4}
        testID={testID}
        ref={ref}
        placeholderTextColor={colors.neutral[400]}
        className={styles.input()}
        onBlur={onBlur}
        onFocus={onFocus}
        {...inputProps}
        style={StyleSheet.flatten([
          { writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' },
          inputProps.style,
        ])}
      />
      {error && (
        <Text
          testID={testID ? `${testID}-error` : undefined}
          className="text-xs text-error dark:text-red-600"
          tx={error}
        />
      )}
    </View>
  );
});

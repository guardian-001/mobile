import clsx from 'clsx';
import React from 'react';
import type {
  GestureResponderEvent,
  TouchableOpacityProps,
} from 'react-native';
import {
  ActivityIndicator,
  I18nManager,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
interface Props extends Omit<TouchableOpacityProps, 'disabled'> {
  onPressHandler?: (event: GestureResponderEvent) => void;
  label?: string;
  loading?: boolean;
  className?: string;
  alternativeBg?: string;
  textClassName?: string;
  iconClassName?: string;
  disabled?: boolean;
  type?: 'pill' | 'button';
  icon?: React.ReactNode;
}
export const Button = React.forwardRef<TouchableOpacity, Props>(
  (
    {
      onPressHandler,
      label: text,
      loading = false,
      disabled = false,
      alternativeBg,
      type = 'button',
      className = '',
      testID,
      textClassName = '',
      iconClassName = '',
      icon,
      ...props
    },
    ref
  ) => {
    const containerClassname = !disabled
      ? type === 'pill'
        ? 'bg-white'
        : 'bg-primary'
      : 'bg-disabled';
    const labelClassname = !disabled
      ? type === 'pill'
        ? 'text-primary-txt'
        : 'text-white'
      : 'text-disabled-txt';
    return (
      <TouchableOpacity
        onPress={onPressHandler}
        disabled={disabled || loading}
        className={clsx(
          `my-2 flex flex-row items-center justify-center px-4 ${className}`,
          alternativeBg ? alternativeBg : containerClassname
        )}
        {...props}
        ref={ref}
        testID={testID}
      >
        {props.children ? (
          props.children
        ) : (
          <>
            {loading ? (
              <ActivityIndicator
                size="small"
                className="h-6 text-white "
                testID={testID ? `${testID}-activity-indicator` : undefined}
              />
            ) : (
              <>
                <Text
                  testID={testID ? `${testID}-label` : undefined}
                  className={clsx(
                    `font-lato text-base font-semibold ${textClassName}`,
                    labelClassname
                  )}
                >
                  {text}
                </Text>
                {icon && (
                  <View
                    style={{
                      transform: I18nManager.isRTL ? 'rotate(180deg)' : '',
                    }}
                    className={`${iconClassName}`}
                  >
                    {icon}
                  </View>
                )}
              </>
            )}
          </>
        )}
      </TouchableOpacity>
    );
  }
);

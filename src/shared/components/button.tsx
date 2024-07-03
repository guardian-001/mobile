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
  textClassName?: string;
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
      type = 'button',
      className = '',
      testID,
      textClassName = '',
      icon,
      ...props
    },
    ref
  ) => {
    const containerClassname = type === 'pill' ? 'bg-white' : 'bg-primary';
    const labelClassname = type === 'pill' ? 'text-primary-txt' : 'text-white';

    return (
      <TouchableOpacity
        onPress={onPressHandler}
        disabled={disabled || loading}
        className={clsx(
          `my-2 flex flex-row items-center justify-center px-4 ${className}`,
          containerClassname
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
                    className="mr-2 "
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

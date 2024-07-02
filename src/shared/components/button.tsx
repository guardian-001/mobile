import clsx from 'clsx';
import React from 'react';
import type { TouchableOpacityProps } from 'react-native';
import {
  ActivityIndicator,
  I18nManager,
  Text,
  TouchableOpacity,
  View as RNView,
} from 'react-native';

interface Props extends Omit<TouchableOpacityProps, 'disabled'> {
  label?: string;
  loading?: boolean;
  className?: string;
  textClassName?: string;
  disabled?: boolean;
  type: string;
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<TouchableOpacity, Props>(
  (
    {
      label: text,
      loading = false,
      disabled = false,
      type = 'default',
      className,
      testID,
      textClassName,
      icon,
      ...props
    },
    ref
  ) => {
    const containerClassname = type === 'default' ? 'bg-white' : 'bg-black';
    const labelClassname =
      type === 'default' ? 'text-primary-txt' : 'text-white';

    return (
      <TouchableOpacity
        disabled={disabled || loading}
        className={clsx(
          'my-2 flex flex-row items-center justify-center rounded-md px-4',
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
                    'font-lato text-base font-semibold',
                    labelClassname
                  )}
                >
                  {text}
                </Text>
                {icon && (
                  <RNView
                    style={{
                      transform: I18nManager.isRTL ? 'rotate(180deg)' : '',
                    }}
                    className="mr-2 bg-primary-txt"
                  >
                    {icon}
                  </RNView>
                )}
              </>
            )}
          </>
        )}
      </TouchableOpacity>
    );
  }
);

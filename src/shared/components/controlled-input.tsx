import * as React from 'react';
import {
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
  useController,
} from 'react-hook-form';

import type { TxKeyPath } from '@/core';

import { Input, type NInputProps } from './input';

type TRule = Omit<
  RegisterOptions,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs'
>;
export type CreateProfileType = {
  name: string;
  data: string;
};
export type RuleType<T> = { [name in keyof T]: TRule };
export type InputControllerType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: TRule;
  required?: boolean;
  disabled?: boolean;
  labelStyle?: string;
  forcedValue?: string;
  inputAreaType?: 'textInput' | 'textArea';
  handleOnChange?: ({ name, data }: CreateProfileType) => void;
  icon?: React.ReactNode;
};

interface ControlledInputProps<T extends FieldValues>
  extends NInputProps,
    InputControllerType<T> {}

export function ControlledInput<T extends FieldValues>(
  props: ControlledInputProps<T>
) {
  const {
    name,
    control,
    rules,
    handleOnChange,
    labelStyle,
    disabled = false,
    inputAreaType = 'textInput',
    required = false,
    autoCapitalize = 'none',
    icon,
    forcedValue,
    ...inputProps
  } = props;

  const { field, fieldState } = useController({ control, name, rules });
  const error = fieldState.error?.message as TxKeyPath | undefined;

  return (
    <Input
      icon={icon}
      disabled={disabled}
      required={required}
      inputAreaType={inputAreaType}
      labelStyle={labelStyle}
      ref={field.ref}
      autoCapitalize={autoCapitalize}
      onChangeText={(value) => {
        field.onChange(value.trim());
        if (handleOnChange) {
          handleOnChange({ name, data: value });
        }
      }}
      value={forcedValue ? forcedValue : (field.value as string) || ''}
      {...inputProps}
      error={error}
    />
  );
}

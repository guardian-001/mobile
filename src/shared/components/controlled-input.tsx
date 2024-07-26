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
  labelStyle?: string;
  inputAreaType?: 'textInput' | 'textArea';
  handleOnChange?: ({ name, data }: CreateProfileType) => void;
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
    inputAreaType = 'textInput',
    ...inputProps
  } = props;

  const { field, fieldState } = useController({ control, name, rules });
  const error = fieldState.error?.message as TxKeyPath | undefined;

  return (
    <Input
      inputAreaType={inputAreaType}
      labelStyle={labelStyle}
      ref={field.ref}
      autoCapitalize="none"
      onChangeText={(value) => {
        field.onChange(value);
        if (handleOnChange) {
          handleOnChange({ name, data: value });
        }
      }}
      value={(field.value as string) || ''}
      {...inputProps}
      error={error}
    />
  );
}

import * as React from 'react';
import {
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
  useController,
} from 'react-hook-form';

import type { TxKeyPath } from '@/core';

import type { Option } from './select';
import { Select, type SelectProps } from './select';

type TRule = Omit<
  RegisterOptions,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs'
>;

export type InputControllerType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: TRule;
  required?: boolean;
  options?: Option[];
  labelStyle?: string;
};

interface ControlledSelectProps<T extends FieldValues>
  extends SelectProps,
    InputControllerType<T> {}

export function ControlledSelect<T extends FieldValues>(
  props: ControlledSelectProps<T>
) {
  const {
    name,
    control,
    rules,
    options,
    required = false,
    ...selectProps
  } = props;

  const { field, fieldState } = useController({ control, name, rules });
  const error = fieldState.error?.message as TxKeyPath | undefined;

  const onSelect = React.useCallback(
    (value: string | number) => {
      field.onChange(value);
    },
    [field]
  );

  return (
    <Select
      options={options}
      required={required}
      {...selectProps}
      onSelect={onSelect}
      value={field.value as string | number}
      error={error}
    />
  );
}

import * as React from 'react';
import {
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
  useController,
} from 'react-hook-form';

import type { TxKeyPath } from '@/core';

import { Switch } from './switch';
type Props<T extends FieldValues> = {
  className?: string;
  accessibilityLabel: string;
  label: string;
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions; // Adjust the type according to your validation rules
};
export const SwitchInput = <T extends FieldValues>(props: Props<T>) => {
  const { name, control, rules, label, accessibilityLabel, className } = props;

  const { field, fieldState } = useController({ control, name, rules });
  const error = fieldState.error?.message as TxKeyPath | undefined;

  return (
    <Switch.Root
      checked={field.value}
      onChange={field.onChange}
      error={error}
      accessibilityLabel={accessibilityLabel}
      className={`${className} pb-2`}
    >
      <Switch.Icon checked={field.value} />
      <Switch.Label text={label} />
    </Switch.Root>
  );
};

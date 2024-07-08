import * as React from 'react';
import {
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
  useController,
} from 'react-hook-form';

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

  return (
    <Switch.Root
      checked={field.value}
      onChange={field.onChange}
      error={fieldState.error?.message}
      accessibilityLabel={accessibilityLabel}
      className={`${className} pb-2`}
    >
      <Switch.Icon checked={field.value} />
      <Switch.Label text={label} />
    </Switch.Root>
  );
};

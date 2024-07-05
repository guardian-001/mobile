import * as React from 'react';
import {
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
  useController,
} from 'react-hook-form';

import { Checkbox } from './checkbox';
type Props<T extends FieldValues> = {
  className?: string;
  accessibilityLabel: string;
  label: string;
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions;
};
export const CheckboxInput = <T extends FieldValues>(props: Props<T>) => {
  const { name, control, rules, label, accessibilityLabel, className } = props;

  const { field, fieldState } = useController({ control, name, rules });

  return (
    <Checkbox.Root
      checked={field.value}
      onChange={field.onChange}
      error={fieldState.error?.message}
      accessibilityLabel={accessibilityLabel}
      className={`${className} pb-2`}
    >
      <Checkbox.Icon checked={field.value} />
      <Checkbox.Label text={label} />
    </Checkbox.Root>
  );
};

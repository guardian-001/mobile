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
  labelSwitch: string;
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions;
};
export const SwitchInput = <T extends FieldValues>(props: Props<T>) => {
  const {
    name,
    control,
    rules,
    label,
    labelSwitch,
    accessibilityLabel,
    className,
  } = props;

  const { field } = useController({ control, name, rules });

  return (
    <Switch.Root
      checked={field.value}
      onChange={field.onChange}
      accessibilityLabel={accessibilityLabel}
      className={`${className} pb-2`}
    >
      <Switch.Icon checked={field.value} />
      <Switch.Label text={field.value ? label : labelSwitch} />
    </Switch.Root>
  );
};

import * as React from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';

import { Radio } from './radio';
type Props<T extends FieldValues> = {
  className?: string;
  accessibilityLabel: string;
  label: string;
  name: Path<T>;
  control: Control<T>;
  rules?: any; // Adjust the type according to your validation rules
};
export const RadioInput = <T extends FieldValues>(props: Props<T>) => {
  const { name, control, rules, label, accessibilityLabel, className } = props;

  const { field, fieldState } = useController({ control, name, rules });

  return (
    <Radio.Root
      checked={field.value}
      onChange={field.onChange}
      error={fieldState.error?.message}
      accessibilityLabel={accessibilityLabel}
      className={`${className} pb-2`}
    >
      <Radio.Icon checked={field.value} />
      <Radio.Label text={label} />
    </Radio.Root>
  );
};

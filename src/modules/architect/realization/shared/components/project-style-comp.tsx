import clsx from 'clsx';
import React from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';

import { ToggleCard } from '@/shared/components';
import type { Style } from '@/types';

interface ProjectStyleCompProps<T extends FieldValues> {
  item: Style;
  control: Control<T>;
  name: Path<T>;
  classname: string;
}

const ProjectStyleComp = <T extends FieldValues>({
  item,
  control,
  name,
  classname,
}: ProjectStyleCompProps<T>) => (
  <ToggleCard
    key={item.id}
    className={clsx(
      classname,
      ' flex h-12 w-full items-center justify-center rounded-lg'
    )}
    checkbox={true}
    title={item.label}
    name={name}
    control={control}
    value={item.id}
  />
);

export default ProjectStyleComp;

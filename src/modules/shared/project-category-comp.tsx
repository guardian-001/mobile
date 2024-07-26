import React from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';

import { ToggleCard } from '@/shared/components';
import type { Category } from '@/types';

interface ProjectCategoryCompProps<T extends FieldValues> {
  item: Category;
  control: Control<T>;
  name: Path<T>;
}

const ProjectCategoryComp = <T extends FieldValues>({
  item,
  control,
  name,
}: ProjectCategoryCompProps<T>) => (
  <ToggleCard
    key={item.id}
    className="mx-2 mb-7 h-32 w-36 rounded-2xl"
    title={item.label}
    image={item.icon}
    name={name}
    control={control}
    value={item.id}
  />
);

export default ProjectCategoryComp;

import React from 'react';

import { colors, Text, View } from '@/shared/components';

interface TagProjectProps {
  label: string;
  SvgComponent?: React.ComponentType<{ color: string }>;
  className?: string;
}
export const TagProject = ({
  label,
  SvgComponent,
  className,
}: TagProjectProps) => (
  <View
    className={`${className} min-w-24 flex flex-row items-center justify-evenly rounded-2xl bg-black/50 p-2`}
  >
    {SvgComponent && <SvgComponent color={colors.white} />}
    <Text className="text-xs text-white">{label}</Text>
  </View>
);

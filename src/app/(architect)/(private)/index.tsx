import { FlashList } from '@shopify/flash-list';
import React, { useState } from 'react';

import type { Post } from '@/api';
import { usePosts } from '@/api';
import {
  Checkbox,
  EmptyList,
  FocusAwareStatusBar,
  Radio,
  Switch,
  Text,
  View,
} from '@/shared/components';
import { Card } from '@/shared/utils/card';

export default function Feed() {
  const [checked, setChecked] = useState(false);
  const { data, isPending, isError } = usePosts();
  const renderItem = React.useCallback(
    ({ item }: { item: Post }) => <Card {...item} />,
    []
  );

  if (isError) {
    return (
      <View>
        <Text> Error Loading data </Text>
      </View>
    );
  }
  return (
    <View className="flex-1 ">
      <FocusAwareStatusBar />
      <Checkbox
        checked={checked}
        onChange={setChecked}
        label="aaa"
        accessibilityLabel="aza"
        className="m-8"
      />
      <Switch
        checked={checked}
        onChange={setChecked}
        label="aaa"
        accessibilityLabel="aza"
        className="m-8"
      />
      <Radio
        checked={checked}
        onChange={setChecked}
        label="aaa"
        accessibilityLabel="aza"
        className="m-8"
      />
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading={isPending} />}
        estimatedItemSize={300}
      />
    </View>
  );
}

import * as React from 'react';

import {
  FocusAwareStatusBar,
  SafeAreaView,
  ScrollView,
} from '@/shared/components';
import { Typography } from '@/shared/components/typography';
import { Buttons } from '@/shared/utils/buttons';
import { Colors } from '@/shared/utils/colors';
import { Inputs } from '@/shared/utils/inputs';

export default function Style() {
  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView className="px-4">
        <SafeAreaView className="flex-1">
          <Typography />
          <Colors />
          <Buttons />
          <Inputs />
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

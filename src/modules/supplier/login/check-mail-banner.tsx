import React from 'react';
import { Text, View } from 'react-native';

import { HeaderTitle } from '@/shared/components';

export default function CheckMailBanner() {
  return (
    <View>
      <HeaderTitle text="signup.headerTitle" type="custom" />

      <Text>There are no account matches with this email</Text>
    </View>
  );
}

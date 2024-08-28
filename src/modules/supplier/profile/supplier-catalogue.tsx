import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import CatalogueHeader from './catalogue-header';

export default function SupplierCatalogue() {
  return (
    <View className={'bg-secondary'} style={styles.gradientBachgroud}>
      <CatalogueHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  gradientBachgroud: { flex: 1 },
});

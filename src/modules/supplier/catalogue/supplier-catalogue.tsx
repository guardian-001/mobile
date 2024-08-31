import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import CatalogueBody from './catalogue-body';
import CatalogueHeader from './catalogue-header';
import { useProfileCatalogue } from './hooks/use-profile-catalogue';

export default function SupplierCatalogue() {
  const { setSelectedCollectionId, selectedCollection } = useProfileCatalogue();
  return (
    <View className={'bg-secondary'} style={styles.gradientBachgroud}>
      <CatalogueHeader setSelectedCollectionId={setSelectedCollectionId} />

      <CatalogueBody selectedCollection={selectedCollection} />
    </View>
  );
}

const styles = StyleSheet.create({
  gradientBachgroud: { flex: 1 },
});

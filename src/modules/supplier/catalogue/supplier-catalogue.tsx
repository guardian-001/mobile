import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import CatalogueBody from './catalogue-body';
import CatalogueHeader from './catalogue-header';
import { ProfileCatalogueProvider } from './hooks/profile-catalogue-provider';

export default function SupplierCatalogue() {
  return (
    <View className={'bg-secondary'} style={styles.gradientBachgroud}>
      <ProfileCatalogueProvider>
        <CatalogueHeader />
        <CatalogueBody />
      </ProfileCatalogueProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientBachgroud: { flex: 1 },
});

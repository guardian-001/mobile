import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import ProfileBody from './profile-body';
import ProfileHeader from './profile-header';

export default function ArchitectProfile() {
  return (
    <ScrollView>
      <View
        className="flex-column flex gap-10 bg-secondary"
        style={styles.gradientBachgroud}
      >
        <ProfileHeader />
        <ProfileBody />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gradientBachgroud: { flex: 1 },
});

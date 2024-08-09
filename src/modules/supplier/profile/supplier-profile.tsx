import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Flag, Help, Logout, Security, Terms, User } from '@/assets/icons';
import {
  colors,
  GradientBackground,
  Item,
  ItemsContainer,
  ScrollView,
} from '@/shared/components';

import { useProfileSupplier } from './hooks/use-profile';

export default function SupplierProfile() {
  const { navigateTo, logoutHandler } = useProfileSupplier();
  return (
    <GradientBackground
      colors={[colors.white, colors['extra-light-blue']]}
      style={styles.gradientBachgroud}
    >
      <ScrollView
        contentContainerClassName="min-h-[80%] p-6 pb-20  "
        showsVerticalScrollIndicator={false}
      >
        <ItemsContainer title="profile.account">
          <Item
            text="profile.info"
            icon={<User />}
            onPress={() => navigateTo(`(profile)/basic-information/`)}
          />{' '}
          <Item
            text="profile.info"
            icon={<User />}
            onPress={() => navigateTo(`(profile)/company-information/`)}
          />
          <Item
            text="profile.password"
            icon={<Security />}
            onPress={() => navigateTo(`(profile)/reset-password-client/`)}
          />
        </ItemsContainer>
        <ItemsContainer title="profile.assistance">
          <Item text="profile.helpCenter" icon={<Help />} onPress={() => {}} />
          <Item text="profile.terms" icon={<Terms />} onPress={() => {}} />
          <Item text="profile.report" icon={<Flag />} onPress={() => {}} />
        </ItemsContainer>
        <ItemsContainer title="profile.connection">
          <Item
            text="profile.logout"
            icon={<Logout />}
            onPress={() => logoutHandler('(client)/(public)/login')}
          />
        </ItemsContainer>
      </ScrollView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  gradientBachgroud: { flex: 1 },
});

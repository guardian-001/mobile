import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { Flag, Help, Logout, Security, Terms, User } from '@/assets/icons';
import {
  Billing,
  CardIcon,
  CompanyInfo,
  ManageSubscription,
  Sociaux,
} from '@/assets/icons/archimatch';
import { Item, ItemsContainer, ScrollView } from '@/shared/components';

import { useProfileSupplier } from './hooks/use-profile';
import ProfileHeader from './profile-header';

export default function SupplierProfile() {
  const { navigateTo, logoutHandler } = useProfileSupplier();
  return (
    <View className={'bg-secondary'} style={styles.gradientBachgroud}>
      <ScrollView
        contentContainerClassName="min-h-[80%] p-6 pb-20  "
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeader />
        <ItemsContainer title="profile.account">
          <Item
            text="profile.info"
            icon={<User />}
            onPress={() => navigateTo(`(profile)/basic-information/`)}
          />
          <Item
            text="profile.info-company"
            icon={<CompanyInfo />}
            onPress={() => navigateTo(`(profile)/company-information/`)}
          />
          <Item
            text="profile.sociaux"
            icon={<Sociaux />}
            onPress={() => navigateTo(`(profile)/company-information/`)}
          />
          <Item
            text="profile.password"
            icon={<Security />}
            onPress={() => navigateTo(`(profile)/reset-password-client/`)}
          />
        </ItemsContainer>
        <ItemsContainer title="profile.subscription">
          <Item
            text="profile.subscribe"
            icon={<ManageSubscription />}
            onPress={() => {}}
          />
          <Item
            text="profile.Facturation"
            icon={<Billing />}
            onPress={() => {}}
          />
          <Item
            text="profile.payement"
            icon={<CardIcon />}
            onPress={() => {}}
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
            onPress={() => logoutHandler('(SUPPLIER)/(public)/login')}
          />
        </ItemsContainer>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientBachgroud: { flex: 1 },
});

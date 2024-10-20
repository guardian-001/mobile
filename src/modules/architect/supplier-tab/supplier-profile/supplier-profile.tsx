import React from 'react';

import { Phone } from '@/assets/icons/archimatch';
import { translate } from '@/core';
import {
  Button,
  colors,
  Image,
  Text,
  TouchableOpacity,
  View,
} from '@/shared/components';

import { useSupplierProfile } from './hooks/use-suppllier-profile';

export default function SupplierProfile() {
  const {
    activeTab,
    tabs,
    renderContent,
    setActiveTab,
    coverImageError,
    setCoverImageError,
    logoUrlError,
    setLogoUrlError,
    fallbackCoverImage,
    fallbackLogoUrl,
    supplierData,
  } = useSupplierProfile();
  return (
    <View className="flex-1 bg-white">
      <View className="items-center">
        <Image
          source={{
            uri:
              coverImageError || !supplierData?.coverImage
                ? fallbackCoverImage
                : supplierData?.coverImage,
          }}
          className="h-44 w-full"
          onError={() => setCoverImageError(true)}
        />
        <Image
          source={{
            uri:
              logoUrlError || !supplierData?.profileImage
                ? fallbackLogoUrl
                : supplierData?.profileImage,
          }}
          className="-mt-16 mb-2 h-24 w-24 rounded-full border-4 border-white"
          onError={() => setLogoUrlError(true)}
        />
        <Text className="text-2xl font-bold">
          {supplierData?.companyName || 'empty'}
        </Text>
        <Text className="text-description">
          {supplierData?.companySpeciality || 'empty'}
        </Text>
        <Button
          leftIcon={<Phone color={colors.white} />}
          label={translate('common.call')}
          onPress={() => {}}
          textClassName="text-sm font-semibold"
          className="my-4 h-12 w-[85%] gap-3 rounded-lg"
        />
      </View>
      <View className="flex-1">
        <View className="flex-row justify-around">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const IconComponent = tab.icon;
            const color =
              activeTab === tab.id ? colors.client : colors.description;
            return (
              <TouchableOpacity
                key={tab.id}
                onPress={() => setActiveTab(tab.id)}
                className={`w-1/2 flex-row items-center justify-center gap-2 py-2 ${
                  isActive ? 'border-b-2 border-primary' : ''
                }`}
              >
                <IconComponent color={color} />
                <Text
                  tx={tab.label}
                  className={`font-bold ${
                    isActive ? 'text-primary' : 'text-description'
                  }`}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <View className="flex-1">{renderContent()}</View>
      </View>
    </View>
  );
}

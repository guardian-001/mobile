import { useRouter } from 'expo-router';
import React, { useState } from 'react';

import type { SupplierProfileInfoType } from '@/api/supplier/profile/types';
import { translate } from '@/core';
import { Button, Image, Text, View } from '@/shared/components';

type SupplierCardProps = {
  supplier: SupplierProfileInfoType;
};

export const SupplierCard = ({ supplier }: SupplierCardProps) => {
  const [coverImageError, setCoverImageError] = useState(false);
  const [logoUrlError, setLogoUrlError] = useState(false);
  const fallbackCoverImage =
    'https://raw.githubusercontent.com/AzizSandid/AzizSandid/main/coverImage.png';
  const fallbackLogoUrl =
    'https://raw.githubusercontent.com/AzizSandid/AzizSandid/main/supplierImage.png';
  const router = useRouter();

  return (
    <View className="items-center rounded-2xl bg-white shadow-lg shadow-color-shadow">
      <Image
        source={{
          uri:
            coverImageError || !supplier.coverImage
              ? fallbackCoverImage
              : supplier.coverImage,
        }}
        className="h-36 w-full rounded-t-2xl"
        onError={() => setCoverImageError(true)}
      />
      <Image
        source={{
          uri:
            logoUrlError || !supplier.profileImage
              ? fallbackLogoUrl
              : supplier.profileImage,
        }}
        className="-mt-16 mb-2 h-24 w-24 rounded-full border-4 border-white"
        onError={() => setLogoUrlError(true)}
      />
      <Text className="text-2xl font-bold">
        {supplier.companyName || 'empty'}
      </Text>
      <Text className="text-description">
        {supplier.companySpeciality || 'empty'}
      </Text>
      <Button
        label={translate('searchSupplier.viewCatalogue')}
        onPress={() => {
          router.push({
            pathname: '(client)/(private)/(supplier-profile)/profile',
            params: { supplier: JSON.stringify(supplier) },
          });
        }}
        textClassName="text-sm"
        className="my-2 h-11 w-[90%] rounded-lg"
      />
      <View className="my-2 w-[90%] border-b border-dashed border-color-border" />
      <View className="mb-4 flex-row gap-8">
        <View className="items-center">
          <Text className="text-sm text-description">Collection</Text>
          <Text className="text-xl font-semibold">5 k</Text>
        </View>
        <View className="items-center">
          <Text className="text-sm text-description">Produits</Text>
          <Text className="text-xl font-semibold">40 k</Text>
        </View>
      </View>
    </View>
  );
};

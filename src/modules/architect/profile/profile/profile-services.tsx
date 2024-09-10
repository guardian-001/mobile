import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import { AddServices } from '@/assets/icons/archimatch/architect-profile-images/add-services';
import { NoDataBox } from '@/assets/icons/archimatch/no-data-box';
import TickIcon from '@/assets/icons/tick-icon';
import { colors, Image, Modal, Text } from '@/shared/components';
import { deepEqual } from '@/shared/utils';

import ArchitectProfileNeed from './components/architect-profile-need';
import { useProfileInfo } from './hooks/use-profile-info';
import { useProfileServices } from './hooks/use-profile-services';

export default function ProfileServices() {
  const { data, refetch: refetchProfileInfo } = useProfileInfo();
  const {
    needs,
    ref,
    present,
    dismiss,
    handleSelect,
    updateNeeds,
    selectedNeeds,
  } = useProfileServices();
  const handleUpdateNeeds = async () => {
    await updateNeeds();
    refetchProfileInfo();
  };
  return (
    <View className="mt-2 flex  w-11/12 flex-1">
      <TouchableOpacity
        onPress={() => present()}
        className="mb-5 mt-2 flex w-full flex-1 items-center justify-center"
      >
        <View className="flex h-16 w-full flex-row items-center justify-center rounded-xl border border-dashed border-color-border pr-10">
          <AddServices />
          <Text
            className="-ml-2 text-center text-base font-semibold"
            tx={'architectProfile.addService'}
          />
        </View>
      </TouchableOpacity>
      {data?.needs && data?.needs.length > 0 ? (
        <>
          {data.needs.map((need) => (
            <ArchitectProfileNeed need={need} />
          ))}
        </>
      ) : (
        <View className="flex w-full items-center justify-center gap-5">
          <NoDataBox />
          <Text
            tx={'architectProfile.noNeedsFound'}
            className="text-md font-bold text-description"
          />
        </View>
      )}
      <Modal snapPoints={['65%']} ref={ref} onDismiss={dismiss}>
        <View className="w-30 absolute bottom-10 right-0 z-20 flex items-end">
          <TouchableOpacity
            onPress={handleUpdateNeeds}
            className="right-5 mx-2 my-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-txt"
          >
            <TickIcon color={colors.white} width={55} height={50} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View className="my-10 flex w-full items-center">
            {needs?.map((need) => (
              <TouchableOpacity
                key={need.id}
                className="mb-1 w-11/12"
                onPress={() => handleSelect(need)}
              >
                <View
                  className={`flex h-16 flex-row items-center justify-start gap-2 rounded-xl border border-color-border px-4 ${
                    selectedNeeds.some((obj) => deepEqual(obj, need)) &&
                    'bg-primary'
                  }`}
                >
                  <Image
                    className="mt-1 h-5 w-5"
                    source={{ uri: need.icon }}
                    contentFit="contain"
                  />
                  <Text
                    className={`mt-1 text-start text-base font-semibold ${
                      selectedNeeds.some((obj) => deepEqual(obj, need)) &&
                      'text-white'
                    }`}
                  >
                    {need.label}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
}

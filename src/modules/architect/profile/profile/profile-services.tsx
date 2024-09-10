import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import { AddServices } from '@/assets/icons/archimatch/architect-profile-images/add-services';
import { translate } from '@/core';
import { Button, Modal, Text } from '@/shared/components';

import ArchitectProfileNeed from './components/architect-profile-need';
import ArchitectProfileService from './components/architect-profile-service';
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
        ''
      )}
      <Modal snapPoints={['65%']} ref={ref} onDismiss={dismiss}>
        <View className="absolute bottom-8  right-0 z-20 flex w-full   items-center  ">
          <Button
            label={translate('common.update')}
            className=" h-14 w-11/12 rounded-md"
            textClassName={'text-base'}
            onPress={handleUpdateNeeds}
          />
        </View>
        <ScrollView>
          <View className="mb-28 mt-10 flex w-full items-center">
            {needs?.map((need) => (
              <ArchitectProfileService
                need={need}
                handleSelect={handleSelect}
                selectedNeeds={selectedNeeds}
              />
            ))}
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
}

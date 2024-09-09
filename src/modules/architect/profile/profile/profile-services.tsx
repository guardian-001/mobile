import { Env } from '@env';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { AddServices } from '@/assets/icons/archimatch/architect-profile-images/add-services';
import { NoDataBox } from '@/assets/icons/archimatch/no-data-box';
import { translate } from '@/core';
import { Button, Image, Modal, Text } from '@/shared/components';

import { useProfileInfo } from './hooks/use-profile-info';
import { useProfileServices } from './hooks/use-profile-services';

export default function ProfileServices() {
  const { data } = useProfileInfo();
  const {
    needs,
    ref,
    present,
    dismiss,
    handleSelect,
    updateNeeds,
    selectedNeeds,
  } = useProfileServices();

  return (
    <View className="mt-2 flex  w-11/12 flex-1  ">
      <TouchableOpacity
        onPress={() => present()}
        className="mb-10 mt-2 flex  w-full flex-1  items-center justify-center"
      >
        <View className="flex h-16 w-full flex-row items-center justify-center rounded-xl  border border-dashed border-color-border pr-10">
          <AddServices />
          <Text
            className=" -ml-2 text-center text-base font-semibold"
            tx={'architectProfile.addService'}
          />
        </View>
      </TouchableOpacity>
      {data?.needs && data?.needs?.length > 0 ? (
        <>
          {data.needs.map((need) => {
            const imgUrl = `${Env.API_URL}${need.icon}`;
            return (
              <View className="  flex h-16 w-full flex-row items-center justify-center rounded-xl  border   border-color-border ">
                <Image
                  className="  mt-1  h-5 w-5"
                  source={{ uri: imgUrl }}
                  contentFit="contain"
                />
                <Text className=" -ml-2 text-center text-base font-semibold">
                  {need.label}
                </Text>
              </View>
            );
          })}
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
      <Modal snapPoints={['85%']} ref={ref} onDismiss={dismiss}>
        <>
          <Button
            label={translate('common.modify')}
            textClassName="text-xl"
            onPress={updateNeeds}
            className="mx-2 my-4 h-16 w-16  rounded-full"
          />
          {needs?.map((need) => {
            const imgUrl = `${Env.API_URL}${need.icon}`;

            return (
              <TouchableOpacity onPress={() => handleSelect(need.label)}>
                <View
                  className={`flex h-16 w-full flex-row items-center justify-center rounded-xl  border   border-color-border ${
                    selectedNeeds.includes(need.label) && 'bg-primary'
                  }`}
                >
                  <Image
                    className="  mt-1  h-5 w-5"
                    source={{ uri: imgUrl }}
                    contentFit="contain"
                  />
                  <Text className=" -ml-2 text-center text-base font-semibold">
                    {need.label}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </>
      </Modal>
    </View>
  );
}

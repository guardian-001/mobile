import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Plus } from '@/assets/icons';
import { Eye, Profile } from '@/assets/icons/archimatch';
import { translate } from '@/core';
import {
  Button,
  colors,
  GradientBackground,
  Image,
  Modal,
  Tag,
  Text,
} from '@/shared/components';

import { useProfileInfo } from '../profile/hooks/use-profile-info';
import type { Collection } from '../profile/type';
import AddCollectionForm from '../shared/components/add-collection-form';
import { useAddCollection } from './hooks/use-add-collection';
import { useProfileCatalogue } from './hooks/use-profile-catalogue';
type HeaderProps = {
  setSelectedCollectionId: (id?: number) => void;
};
export default function CatalogueHeader({
  setSelectedCollectionId,
}: HeaderProps) {
  const { data } = useProfileInfo();
  const { CollectionData, isSuccessCollection, control } =
    useProfileCatalogue();
  const { reset, ref, present } = useAddCollection();
  return (
    <View className="flex h-72 w-full    ">
      <GradientBackground
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[colors['lighter-blue-linear'], colors['light-blue-linear']]}
        style={styles.container}
      >
        <View className="  my-10 flex h-full w-full items-center justify-center px-3 ">
          <View className="flex w-full flex-row items-center  ">
            <View className="flex h-fit w-full  flex-row items-start justify-between ">
              {data?.profileImage ? (
                <View className="ml-1 rounded-full bg-white shadow-md shadow-color-shadow ">
                  <Image
                    source={data?.profileImage}
                    className="  h-20 w-20 rounded-full"
                  />
                </View>
              ) : (
                <View className="ml-1 flex items-center justify-center rounded-full bg-white p-1">
                  <View className="flex h-20 w-20 items-center justify-center rounded-full   bg-gray-100">
                    <Profile width={20} height={30} color={colors.gray[400]} />
                  </View>
                </View>
              )}
              <View className="flex flex-row items-center justify-center gap-1">
                <Eye />

                <Text
                  tx="catalogue.preview"
                  className="text-end text-xl   font-semibold text-main-project-blue underline"
                />
              </View>
            </View>
          </View>

          {isSuccessCollection && (
            <View className="flex-column mt-6   flex w-full items-start  gap-4 ">
              <Text
                className="ml-2 text-base font-bold"
                tx="catalogue.collections"
              />
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerClassName=" items-center"
                className="flex h-fit max-h-16 w-full"
              >
                <Button
                  label={translate('catalogue.addCollection')}
                  onPress={() => present()}
                  className=" mx-2 flex h-12 items-center justify-center gap-4 rounded-full border-2 border-dashed border-color-border bg-white"
                  textClassName="color-primary-txt"
                  leftIcon={<Plus color={colors.blue} />}
                />
                {CollectionData?.map((tag: Collection) => (
                  <Tag
                    key={tag.id}
                    label={tag.title}
                    name="collection"
                    id={tag.id}
                    control={control}
                    className="flex h-12 max-w-xl flex-row items-center justify-evenly"
                    obligation={true}
                    idValidation={true}
                    onChange={(id) => {
                      setSelectedCollectionId(id);
                    }}
                  />
                ))}
              </ScrollView>
            </View>
          )}
        </View>
      </GradientBackground>
      <Modal snapPoints={['85%']} ref={ref} onDismiss={() => reset()}>
        <AddCollectionForm />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

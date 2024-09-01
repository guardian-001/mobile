import React from 'react';

import { translate } from '@/core';
import {
  Button,
  ControlledInput,
  ScrollView,
  SwitchInput,
  Text,
  View,
} from '@/shared/components';

import ImagePickerComponent from '../../catalogue/components/image-picker';
import { useAddProduct } from '../../catalogue/hooks/use-add-product';
import type { Collection } from '../../profile/type';
type AddProductProps = {
  selectedCollection?: Collection;
};
export default function AddProductForm({
  selectedCollection,
}: AddProductProps) {
  const {
    handleSubmit,
    modalControl,
    onSubmit,
    images,
    selectedImage,
    error,
    pickImages,
    removeImage,
    handleImagePress,
  } = useAddProduct();
  return (
    <View className="flex h-fit justify-center p-4">
      <Text
        tx="catalogue.createProduct.addProduct"
        className="text-xl font-bold"
      />
      <Text
        tx="catalogue.createProduct.addproductDescription"
        className="text-xs text-description"
      />
      <ScrollView className="h-[84%] pb-10">
        <ControlledInput
          required={true}
          control={modalControl}
          name="name"
          labelStyle="mb-1 text-sm font-semibold"
          className=" mb-5 mt-4 gap-2"
          label={translate('catalogue.createProduct.nameLabel')}
          placeholder={translate('catalogue.createProduct.namePlaceholder')}
        />
        <ControlledInput
          required={true}
          control={modalControl}
          name="price"
          labelStyle="mb-1 text-sm font-semibold"
          className=" mb-5  gap-2"
          label={translate('catalogue.createProduct.prixLabel')}
          placeholder={translate('catalogue.createProduct.prixPlaceholder')}
        />
        <ControlledInput
          required={true}
          control={modalControl}
          name="collectionCategory"
          labelStyle="mb-1 text-sm font-semibold"
          className=" mb-5 gap-2"
          label={translate('catalogue.createProduct.collectionLabel')}
          forcedValue={String(selectedCollection && selectedCollection.title)}
          disabled={true}
        />
        <View className="mt-2 flex gap-3 ">
          <Text
            className="text-sm font-semibold text-primary-txt"
            tx={'catalogue.createCollection.visibilityLabel'}
          />
          <View className="h-10">
            <SwitchInput
              accessibilityLabel=""
              label={translate('catalogue.createCollection.visibilityDescAct')}
              labelSwitch={translate(
                'catalogue.createCollection.visibilityDescriptionNotActive'
              )}
              name="display"
              control={modalControl}
            />
          </View>
        </View>
        <ControlledInput
          required={true}
          control={modalControl}
          name="price"
          labelStyle="mb-1 text-sm font-semibold"
          className=" mb-5 h-40  gap-2"
          inputAreaType="textArea"
          label={translate('catalogue.createProduct.descriptionLabel')}
          placeholder={translate(
            'catalogue.createProduct.descriptionPlaceholder'
          )}
        />
        <ImagePickerComponent
          images={images}
          selectedImage={selectedImage}
          error={error}
          pickImages={pickImages}
          removeImage={removeImage}
          handleImagePress={handleImagePress}
        />
      </ScrollView>
      <Button
        label={translate('common.publish')}
        className=" mt-4  h-10 w-full rounded-lg"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}

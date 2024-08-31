import React from 'react';
import { Pressable, ScrollView } from 'react-native';

import { ImageUploader } from '@/assets/icons/archimatch';
import { translate } from '@/core';
import { StepperButton } from '@/modules/shared';
import { Image, Text, View } from '@/shared/components';
import type { ImageInfo } from '@/types';

import ImagesList from './images-list';
type ImagePickerProps = {
  images: ImageInfo[];
  selectedImage: ImageInfo;
  error: string;
  pickImages: () => {};
  removeImage: (index: number, subIndex: number) => void;
  handleImagePress: (index: number, subIndex: number) => void;
};
export default function ImagePickerComponent({
  images,
  selectedImage,
  error,
  pickImages,
  removeImage,
  handleImagePress,
}: ImagePickerProps) {
  return (
    <>
      <View className="w-full items-start">
        {images.length > 0 ? (
          <ScrollView
            contentContainerClassName="items-center justify-center pt-2 pb-5"
            className="flex h-full w-full"
            showsVerticalScrollIndicator={false}
          >
            <View className="mb-4 flex h-56 w-full items-center justify-start">
              <Image
                contentFit="fill"
                source={{ uri: selectedImage?.uri }}
                className="h-full w-full rounded-lg"
              />
            </View>
            <View className="w-full grid-flow-row grid-cols-2 items-start gap-5">
              <ImagesList
                images={images}
                removeImage={removeImage}
                handleImagePress={handleImagePress}
                pickImages={pickImages}
              />
              {images.length % 2 === 0 && (
                <View className="flex w-full items-center justify-center px-2">
                  <Pressable
                    onPress={pickImages}
                    className=" ml-2 mt-2 flex h-fit w-full  items-center justify-center rounded-md border border-dashed border-description"
                  >
                    <View className="flex h-28 w-28 items-center justify-center">
                      <ImageUploader />
                    </View>
                  </Pressable>
                </View>
              )}
            </View>
          </ScrollView>
        ) : (
          <View className="mx-auto flex w-11/12 items-center justify-center rounded-xl border border-dashed border-description py-2">
            <View className="flex h-28 w-28 items-center justify-center">
              <ImageUploader />
            </View>
            <Text
              tx={'realisation.galleryStep.imgSelectorPlaceholder'}
              className="text-md mb-4 max-w-xs text-center text-description"
            />
            <StepperButton
              width="w-[45%]"
              alternativeBg="bg-primary"
              alternativeTextStyle="color-white"
              label={translate('realisation.galleryStep.buttonTitle')}
              onPressHandler={pickImages}
            />
          </View>
        )}
        {error && (
          <Text
            tx={'realisation.galleryStep.typeFileError'}
            className="text-xs text-error  "
          />
        )}
      </View>
    </>
  );
}

import React from 'react';
import { Pressable, View } from 'react-native';

import { ImageUploader } from '@/assets/icons/archimatch';
import { Image } from '@/shared/components';

import { useImagePairs } from '../hooks';
import type { ImageInfo } from '../types';
import CloseBtn from './close-btn';

interface ImagesListProps {
  images: ImageInfo[];
  removeImage: (index: number, subIndex: number) => void;
  handleImagePress: (index: number, subIndex: number) => void;
  pickImages: () => void;
}

const ImagesList: React.FC<ImagesListProps> = ({
  images,
  removeImage,
  handleImagePress,
  pickImages,
}) => {
  const imagePairs = useImagePairs(images);

  return (
    <>
      {imagePairs.map((pair, index) => (
        <View
          key={index}
          className="flex h-28 w-full flex-row items-center justify-around gap-5 "
        >
          {pair.map((item: ImageInfo, subIndex: number) => (
            <React.Fragment key={index + '-' + subIndex}>
              <View className="h-fit w-44">
                <CloseBtn handleAction={() => removeImage(index, subIndex)} />
                <Pressable onPress={() => handleImagePress(index, subIndex)}>
                  <Image
                    contentFit="fill"
                    source={{ uri: item.uri }}
                    className="m-1 h-full w-full rounded-md"
                  />
                </Pressable>
              </View>
              {images.length % 2 > 0 &&
              index === Math.floor(images.length / 2) ? (
                <Pressable
                  onPress={pickImages}
                  className="mt-2 flex h-fit w-44 items-center justify-center rounded-md border border-dashed border-description py-2"
                >
                  <View className="flex h-28 w-28 items-center justify-center">
                    <ImageUploader />
                  </View>
                </Pressable>
              ) : null}
            </React.Fragment>
          ))}
        </View>
      ))}
    </>
  );
};

export default ImagesList;

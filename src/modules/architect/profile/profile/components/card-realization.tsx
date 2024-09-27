import React from 'react';
import { FlatList } from 'react-native';

import { ArrowRight } from '@/assets/icons';
import { Pen, Trash } from '@/assets/icons/archimatch';
import type { ProjectRealizationType } from '@/modules/architect/realization/shared/types';
import { useImagesProductSlider } from '@/modules/supplier/catalogue/hooks/use-image-slider';
import {
  Button,
  colors,
  Image,
  Text,
  TouchableOpacity,
  View,
} from '@/shared/components';

type ProductBigProps = {
  element: ProjectRealizationType;
  indexElement: number;
};

export default function RealizationCard({
  element,
  indexElement,
}: ProductBigProps) {
  const {
    activeIndex,
    onViewableItemsChanged,
    viewabilityConfig,
    flatListRef,
  } = useImagesProductSlider();

  const realizationImagesData =
    element?.realizationImages?.map((img) => img.image) ?? [];

  return (
    <View
      key={indexElement}
      className="mx-8 my-6 w-11/12 flex-1 items-center rounded-3xl bg-white  pt-4"
    >
      <View className="mr-4 h-80 w-full">
        <FlatList
          ref={flatListRef}
          data={realizationImagesData}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          renderItem={({ item, index }) => {
            return (
              <View
                key={index}
                className="flex h-80 w-96 items-center justify-between px-4  py-3"
              >
                <Image
                  source={{
                    uri: item,
                  }}
                  className=" h-full w-full "
                  contentFit="contain"
                />
              </View>
            );
          }}
          keyExtractor={(element, index) => index.toString()}
        />
      </View>

      <View className="mx-auto h-[0.5px] w-11/12 bg-slate-200" />
      <View className="w-full flex-1 flex-row items-center justify-between rounded-3xl  ">
        <View className="ml-2 flex-1 flex-row items-center justify-start gap-2">
          <Button
            iconClassName="flex justify-center items-center"
            icon={<Pen color={colors.blue} />}
            className="mr-2 h-10 w-10 rounded-full bg-slate-200"
            onPress={() => {}}
          />
          <Button
            iconClassName="flex justify-center items-center"
            icon={<Trash />}
            className="mr-2 h-10 w-10 rounded-full bg-slate-200"
            onPress={() => {}}
          />
        </View>

        <View className="justify-cente mr-2 flex-row">
          {element?.realizationImages?.map((_, index) => (
            <View
              key={index}
              className={`mx-1 h-2 w-2 rounded-full ${
                activeIndex === index ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </View>

        <TouchableOpacity
          onPress={() => {}}
          className="flex w-full flex-1 flex-row items-center justify-center gap-2"
        >
          <Text
            tx="explore.consultProject"
            className="text-base text-main-project-blue"
          />
          <ArrowRight color={colors.client} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

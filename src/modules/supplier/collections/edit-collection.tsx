import React from 'react';
import { Platform } from 'react-native';

import { Filter } from '@/assets/icons';
import {
  Button,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from '@/shared/components';

import { ProductCard } from './components/product-card';
import { products } from './dump-data';

export const EditCollection = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <View className="my-6 w-11/12 flex-row items-center justify-between self-end px-4">
        <Text tx="collection.collection" className="text-lg font-extrabold" />
        <Image
          source={require('@/assets/images/architecteImage.jpg')}
          className="mb-3 h-14 w-14 rounded-full"
          contentFit="cover"
        />
      </View>
      <View className="h-full w-full flex-1 rounded-t-3xl bg-white p-4 pb-0">
        <View className="my-2 flex flex-row ">
          <Button
            icon={<Filter />}
            onPress={() => {}}
            className="mr-4 h-12 w-12 rounded-lg"
            alternativeBg="bg-light-blue"
          />
        </View>
        <TouchableOpacity
          className="mb-4 h-14 w-full flex-row items-center justify-center gap-3 rounded-lg border border-dashed border-description"
          onPress={() => {}}
        >
          <Image
            source={require('@/assets/images/add-product.png')}
            className="h-7 w-6"
          />
          <Text tx="collection.addProduct" className="font-semibold" />
        </TouchableOpacity>
        <ScrollView
          contentContainerClassName="gap-3 pb-4"
          showsVerticalScrollIndicator={false}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
              onEdit={() => {}}
              onDelete={() => {}}
            />
          ))}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

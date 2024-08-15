import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { MasterCard, ThreeDots } from '@/assets/icons/archimatch';
import { translate } from '@/core';
import {
  Button,
  ControlledInput,
  HeaderTitle,
  ScrollView,
  Text,
  View,
} from '@/shared/components';

import { useBankCard } from './hooks/use-bank-card';

export const BankCardForm = () => {
  const { control, form, onSubmit, formatStringWithAsterisks } = useBankCard();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white pt-5 "
    >
      <HeaderTitle text="supplierProfile.bankCardOption" type="default" />
      <ScrollView
        className="flex-1 bg-background  p-6 "
        contentContainerClassName="gap-4"
      >
        <View className="flex w-full items-center justify-center">
          <View className="h-56 w-full rounded-3xl border border-color-border">
            <View className="flex w-full flex-row justify-between px-6 py-4">
              <Text className="text-lg font-semibold">Mastercard</Text>
              <View className="flex w-16 flex-row items-center justify-between">
                <MasterCard width={30} height={18} />
                <ThreeDots width={20} height={24} />
              </View>
            </View>
            <View className="flex w-full flex-row justify-between px-6 py-4">
              <Text className="text-lg font-semibold text-black">
                {formatStringWithAsterisks(form.watch().cardNumber)}
              </Text>
            </View>
            <View className="flex w-full flex-row justify-between px-6 py-4">
              <View>
                <Text className="text-lg font-medium text-description">
                  {translate('supplierProfile.card.cardOwner')}
                </Text>
                <Text className="text-lg font-semibold text-black">
                  {form.watch().cardName.toUpperCase()}
                </Text>
              </View>
              <View>
                <Text className="text-lg font-medium text-description">
                  {translate('supplierProfile.card.expiration')}
                </Text>
                <Text className="text-lg font-semibold text-black">
                  {form.watch().expirationDate}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text
          tx={'supplierProfile.card.title'}
          className="text-xl font-semibold"
        />
        <View className="flex w-full flex-row justify-between gap-3">
          <ControlledInput
            required={true}
            control={control}
            name="cardName"
            labelStyle="mb-1 text-base text-description font-bold "
            className=" mt-5 w-[70%] gap-2"
            label={translate('supplierProfile.card.cardOwner')}
            placeholder={translate('supplierProfile.card.cardOwner')}
          />
          <ControlledInput
            required={true}
            control={control}
            name="cvv"
            labelStyle="mb-1 text-base text-description font-bold"
            className=" mt-5 w-3/12 gap-2"
            label={translate('supplierProfile.card.cvv')}
            placeholder={translate('supplierProfile.card.cvv')}
          />
        </View>
        <View className="flex flex-row justify-between gap-3">
          <ControlledInput
            required={true}
            control={control}
            name="cardNumber"
            labelStyle="mb-1 text-description text-base font-bold "
            className=" mt-5 w-[70%] gap-2"
            label={translate('supplierProfile.card.cardNumber')}
            placeholder={'xxxx xxxx xxxx xxxx'}
          />
          <ControlledInput
            required={true}
            control={control}
            name="expirationDate"
            labelStyle="mb-1 text-description text-base font-bold"
            className=" mt-5 w-3/12 gap-2"
            label={translate('supplierProfile.card.expiration')}
            placeholder={'MM/YY'}
          />
        </View>
      </ScrollView>
      <Button
        label={translate('notification.save')}
        onPress={onSubmit}
        className="mx-4 mb-10 h-12 rounded-lg"
      />
    </KeyboardAvoidingView>
  );
};

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, ScrollView, Text, View } from 'react-native';

import { StepButtons } from '@/modules/shared';

export type ResetFormProps = {
  handlePreviousStep?: () => void;
  handleNextStep?: () => void;
};

type InterestPickFormType = {
  interests: string[];
};

type InterestPickProps = {
  onSubmit: (data: InterestPickFormType) => void;
  handlePreviousStep?: () => void;
  handleNextStep?: () => void;
};

const InterestPick = ({ handleNextStep }: InterestPickProps) => {
  const { control } = useForm<InterestPickFormType>({
    defaultValues: {
      interests: [],
    },
  });

  const navigation = useNavigation();

  const interests = [
    'Technology',
    'Health',
    'Finance',
    'Education',
    'Entertainment',
  ];

  return (
    <View className="flex-1 items-center justify-between gap-8 p-4">
      <ScrollView
        contentContainerStyle={{ padding: 16 }}
        className="w-4/5 flex-1 gap-5 rounded-3xl bg-white px-3 py-5 shadow-md"
      >
        <Text className="text-lg font-bold">Choose Your Interests</Text>
        <View className="my-4">
          {interests.map((interest, index) => (
            <Controller
              key={index}
              name="interests"
              control={control}
              render={({ field }) => (
                <View className="my-2">
                  <Button
                    title={interest}
                    onPress={() => {
                      const selected = field.value.includes(interest)
                        ? field.value.filter((i) => i !== interest)
                        : [...field.value, interest];
                      field.onChange(selected);
                    }}
                    color={field.value.includes(interest) ? 'blue' : 'gray'}
                  />
                </View>
              )}
            />
          ))}
        </View>
      </ScrollView>
      <StepButtons
        previous={{
          handlePreviousStep: () => navigation.goBack(),
          label: 'signup.retour',
        }}
        next={{ handleNextStep, label: 'signup.suivant' }}
      />
    </View>
  );
};

export default InterestPick;

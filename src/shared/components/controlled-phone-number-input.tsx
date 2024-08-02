import React, { useState } from 'react';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { useController } from 'react-hook-form';
import type { ICountry } from 'react-native-international-phone-number';
import PhoneInput from 'react-native-international-phone-number';

import type { TxKeyPath } from '@/core';

import { colors, Text, View } from './';
type TRule = Omit<
  RegisterOptions,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs'
>;

type InputControllerType<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  control: Control<T>;
  rules?: TRule;
};

interface ControlledInputProps<T extends FieldValues>
  extends InputControllerType<T> {}
export function ControlledPhoneNumberInput<T extends FieldValues>(
  props: ControlledInputProps<T>
) {
  const { name, control, rules, label } = props;

  const { field, fieldState } = useController({ control, name, rules });
  const error = fieldState.error?.message as TxKeyPath | undefined;
  const [selectedCountry, setSelectedCountry] = useState<ICountry>();
  const [number, setNumber] = useState<string>('');

  function handleSelectedCountry(country: ICountry) {
    setSelectedCountry(country);
  }

  return (
    <View className="mb-2 w-full gap-1">
      {label && (
        <Text className="font-lato text-base font-medium text-primary-txt md:text-lg">
          {label}
        </Text>
      )}
      <View>
        <PhoneInput
          value={number}
          onChangeText={(value) => {
            setNumber(value);
            field.onChange(`${selectedCountry?.callingCode}${value}`);
          }}
          onChangePhoneNumber={field.onChange}
          placeholder="111-222-333-444"
          selectedCountry={selectedCountry}
          onChangeSelectedCountry={handleSelectedCountry}
          phoneInputStyles={{
            container: {
              height: 43,
              backgroundColor: colors.white,
              paddingBottom: 1,
              borderColor: error ? colors.error : colors.description,
            },
            input: { fontSize: 16 },
            callingCode: { fontSize: 16 },
            caret: { fontSize: 16, backgroundColor: colors.white },
            flag: { fontSize: 16 },
            flagContainer: {
              width: 120,
              backgroundColor: colors.white,
            },
          }}
        />
      </View>
      {error && <Text className="text-xs text-error " tx={error} />}
    </View>
  );
}

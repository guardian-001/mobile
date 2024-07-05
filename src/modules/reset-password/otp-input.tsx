import React, { useEffect, useRef } from 'react';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { useController } from 'react-hook-form';
import { TextInput, View } from 'react-native';

type OTPInputProps<T extends FieldValues> = {
  length?: number;
  disabled: boolean;
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions;
};

export const OTPInput = <T extends FieldValues>({
  length = 4,
  disabled,
  name,
  control,
  rules,
}: OTPInputProps<T>) => {
  const { field } = useController({ control, name, rules });

  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleChangeText = (text: string, index: number) => {
    const newValue = (field.value || '').split('');
    newValue[index] = text;
    field.onChange(newValue.join(''));

    // Focus next input
    if (text && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: { nativeEvent: { key: string } },
    index: number
  ) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && !field.value[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  return (
    <View className="w-full flex-row justify-around">
      {[...Array(length)].map((_, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          value={(field.value || '')[index] || ''}
          onChangeText={(text) => handleChangeText(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          maxLength={1}
          editable={!disabled}
          keyboardType="number-pad"
          className="h-14 w-14 rounded-lg border border-description text-center text-lg selection:text-primary  focus:border-primary "
          contextMenuHidden
          selectTextOnFocus
          selectionColor={'blue'}
        />
      ))}
    </View>
  );
};

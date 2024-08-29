import {
  BottomSheetFlatList,
  type BottomSheetModal,
} from '@gorhom/bottom-sheet';
import { FlashList } from '@shopify/flash-list';
import clsx from 'clsx';
import * as React from 'react';
import { type FieldValues, useController } from 'react-hook-form';
import { I18nManager, Platform, StyleSheet } from 'react-native';
import Svg, { Path, type SvgProps } from 'react-native-svg';
import { tv } from 'tailwind-variants';

import { CaretDown } from '@/assets/icons';
import type { TxKeyPath } from '@/core';
import colors from '@/theme/colors';

import {
  Image,
  Pressable,
  type PressableProps,
  Text,
  TouchableOpacity,
  View,
} from './';
import type { InputControllerType } from './controlled-input';
import { Modal, useModal } from './modal';

const selectTv = tv({
  slots: {
    container: 'mb-4',
    label: 'mb-1 text-lg text-primary-txt ',
    input:
      'mt-0 flex-row items-center justify-center rounded-lg border border-description p-3 ',
    inputValue: 'font-semibold  text-black',
    inputNoValue: 'font-medium text-description',
  },

  variants: {
    focused: {
      true: {
        input: 'border-neutral-600',
      },
    },
    error: {
      true: {
        input: 'border-error',
        label: 'text-error ',
        inputValue: 'text-error',
      },
    },
    disabled: {
      true: {
        input: 'bg-neutral-200',
      },
    },
  },
  defaultVariants: {
    error: false,
    disabled: false,
  },
});

const List = Platform.OS === 'web' ? FlashList : BottomSheetFlatList;

export type Option = { label: string; value: string | number; icon?: string };

type OptionsProps = {
  options: Option[];
  onSelect: (option: Option) => void;
  value?: string | number;
  testID?: string;
};

function keyExtractor(item: Option) {
  return `select-item-${item.value}`;
}

export const Options = React.forwardRef<BottomSheetModal, OptionsProps>(
  ({ options, onSelect, value, testID }, ref) => {
    const height = options.length * 40;
    const snapPoints = React.useMemo(() => [height], [height]);
    const isDark = false;

    const renderSelectItem = React.useCallback(
      ({ item }: { item: Option }) => (
        <Option
          key={`select-item-${item.value}`}
          label={item.label}
          icon={item.icon}
          selected={value === item.value}
          onPress={() => onSelect(item)}
          testID={testID ? `${testID}-item-${item.value}` : undefined}
        />
      ),
      [onSelect, value, testID]
    );

    return (
      <Modal
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{
          backgroundColor: isDark ? colors.neutral[800] : colors.white,
        }}
      >
        <List
          data={options}
          keyExtractor={keyExtractor}
          renderItem={renderSelectItem}
          testID={testID ? `${testID}-modal` : undefined}
          estimatedItemSize={52}
        />
      </Modal>
    );
  }
);

const Option = React.memo(
  ({
    label,
    icon = '',
    selected = false,
    ...props
  }: PressableProps & {
    selected?: boolean;
    label: string;
    icon?: string;
  }) => {
    return (
      <Pressable
        className="flex-row items-center border-b border-neutral-300 bg-white px-3 py-2  "
        {...props}
      >
        {icon && (
          <Image
            contentFit="fill"
            source={{ uri: icon }}
            className="mr-2 h-6 w-6"
          />
        )}

        <Text className="flex-1  ">{label}</Text>
        {selected && <Check />}
      </Pressable>
    );
  }
);

export interface SelectProps {
  value?: string | number;
  label?: string;
  disabled?: boolean;
  error?: TxKeyPath;
  options?: Option[];
  required?: boolean;

  onSelect?: (value: string | number) => void;
  placeholder?: string;
  testID?: string;
  labelStyle?: string;
  icon?: React.ReactNode;
}
interface ControlledSelectProps<T extends FieldValues>
  extends SelectProps,
    InputControllerType<T> {}

export const Select = (props: SelectProps) => {
  const {
    label,
    value,
    error,
    options = [],
    placeholder = 'select...',
    disabled = false,
    onSelect,
    labelStyle,
    required = false,
    icon,
  } = props;
  const modal = useModal();
  const onSelectOption = React.useCallback(
    (option: Option) => {
      onSelect?.(option.value);
      modal.dismiss();
    },
    [modal, onSelect]
  );
  const styles = React.useMemo(
    () =>
      selectTv({
        error: Boolean(error),
        disabled,
      }),
    [error, disabled]
  );
  const textValue = React.useMemo(
    () =>
      value !== undefined
        ? options?.filter((t) => t.value === value)?.[0]?.label ?? placeholder
        : placeholder,
    [value, options, placeholder]
  );
  return (
    <>
      <View className={styles.container()}>
        {label && (
          <View className="flex w-full flex-row justify-start">
            <Text
              className={clsx(
                styles.label(),
                labelStyle ? labelStyle : 'text-base'
              )}
            >
              {label}
            </Text>
            {required && <Text className="text-primary">*</Text>}
          </View>
        )}
        <TouchableOpacity
          className={styles.input()}
          disabled={disabled}
          onPress={modal.present}
        >
          {icon && (
            <View style={styleAnim.animation} className="mr-2">
              {icon}
            </View>
          )}
          <View className="flex-1">
            <Text
              className={clsx(
                value === undefined
                  ? styles.inputNoValue()
                  : styles.inputValue()
              )}
            >
              {textValue}
            </Text>
          </View>
          <CaretDown />
        </TouchableOpacity>
        {error && <Text className="text-xs text-error  " tx={error} />}
      </View>
      <Options
        ref={modal.ref}
        options={options}
        onSelect={onSelectOption}
        value={value}
      />
    </>
  );
};

export function ControlledSelect<T extends FieldValues>(
  props: ControlledSelectProps<T>
) {
  const { name, control, rules, onSelect: onNSelect, ...selectProps } = props;

  const { field, fieldState } = useController({ control, name, rules });
  const error = fieldState.error?.message as TxKeyPath | undefined;

  const onSelect = React.useCallback(
    (value: string | number) => {
      field.onChange(String(value));
      onNSelect?.(String(value));
    },
    [field, onNSelect]
  );
  return (
    <Select
      onSelect={onSelect}
      value={field.value}
      error={error}
      {...selectProps}
    />
  );
}

const Check = ({ ...props }: SvgProps) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
    className="stroke-black "
  >
    <Path
      d="m20.256 6.75-10.5 10.5L4.506 12"
      strokeWidth={2.438}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const styleAnim = StyleSheet.create({
  animation: {
    transform: I18nManager.isRTL ? 'rotate(180deg)' : '',
  },
});

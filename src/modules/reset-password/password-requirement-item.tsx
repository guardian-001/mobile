import React from 'react';

import TickIcon from '@/assets/icons/tick-icon';
import type { TxKeyPath } from '@/core';
import { colors, Text, View } from '@/shared/components';

interface PasswordRequirementProps {
  isValid: boolean;
  message: TxKeyPath;
}

const PasswordRequirementItem: React.FC<PasswordRequirementProps> = ({
  isValid,
  message,
}) => {
  return (
    <View className="my-1 flex-row">
      <TickIcon color={isValid ? colors.green : colors.description} />
      <Text className={isValid ? '' : 'text-description'} tx={message} />
    </View>
  );
};

export default PasswordRequirementItem;

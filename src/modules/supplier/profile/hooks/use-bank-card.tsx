import { isError } from 'lodash';

import { useCustomForm } from '@/core';
import { BankCardSchema } from '@/shared/validations';

export const useBankCard = () => {
  const { handleSubmit, control, form } = useCustomForm(BankCardSchema, {
    cardName: '',
    cardNumber: '',
    cvv: '',
    expiration: '',
  });
  function formatStringWithAsterisks(input: string) {
    let lettersPart = input.replace(/[^a-zA-Z]/g, '');
    let digitsPart = input.replace(/[^0-9]/g, '');

    let formattedParts = [];

    for (let i = 0; i < lettersPart.length; i += 4) {
      let chunk = lettersPart.slice(i, i + 4);

      if (chunk.length > 0) {
        chunk = '****';
      }

      formattedParts.push(chunk);

      if (formattedParts.length === 12) {
        break;
      }
    }

    let formattedString = formattedParts.join(' ');

    if (digitsPart.length > 0) {
      formattedString += ' ' + digitsPart;
    }

    return formattedString;
  }
  const onSubmit = () => {};

  return {
    control,
    form,
    handleSubmit,
    onSubmit,
    isError,
    formatStringWithAsterisks,
  };
};

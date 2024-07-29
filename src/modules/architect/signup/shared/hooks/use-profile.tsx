import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';

import { FirstConnectionSchema } from '../schemas';
import type { SignupFormDataType } from '../types';

export const useProfile = () => {
  type CreateAccountFormType = Pick<
    SignupFormDataType,
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'phoneNumber'
    | 'address'
    | 'architectIdentifier'
  >;
  const { formData, setFormData, onHandleNext, onHandleBack } =
    useFormStepper<SignupFormDataType>();
  const { handleSubmit, control } = useCustomForm(FirstConnectionSchema, {
    firstName: formData?.firstName,
    lastName: formData?.lastName,
    email: formData?.email,
    phoneNumber: formData?.phoneNumber,
    address: formData?.address,
    architectIdentifier: formData?.architectIdentifier,
  });

  const onSubmit = (data: CreateAccountFormType) => {
    setFormData((prev: SignupFormDataType) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };

  return {
    onSubmit,
    handleSubmit,
    control,
    formData,
    setFormData,
    onHandleNext,
    onHandleBack,
  };
};

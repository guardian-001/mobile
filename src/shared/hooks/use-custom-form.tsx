import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z, ZodType } from 'zod';

const useCustomForm = <T extends ZodType<any, any>>(

  schema: T,
  defaultValues?: any
) => {
  type FormData = z.infer<typeof schema>;
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = form;
  return {
    form,
    handleSubmit,
    control,
    errors,
    setValue,
  };
};

export default useCustomForm;

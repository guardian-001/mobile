import { useCalendar, useFormStepper } from '../providers';
import { useCustomForm } from './use-custom-form';
import { useTimezone } from './use-timezone';

export const useCustomCalendar = <T extends Zod.Schema>(schema: T) => {
  const { currentMonth } = useCalendar();
  const [formattedTimezone] = useTimezone();
  const { formData, setFormData, onHandleNext, onHandleBack } =
    useFormStepper<Zod.infer<T>>();
  const { handleSubmit, errors, control } = useCustomForm(schema, {
    date: formData?.date,
    timeSlot: formData?.timeSlot,
  });
  const onSubmit = (data: Zod.infer<T>) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };
  const previousCondition = new Date().getMonth() === currentMonth;
  return {
    formattedTimezone,
    onHandleBack,
    handleSubmit,
    errors,
    control,
    onSubmit,
    previousCondition,
  };
};

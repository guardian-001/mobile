import {
  useCategoriesApi,
  useNeedsApi,
  useStylesApi,
} from '@/api/architect/project';
import { useCreateProjectApi } from '@/api/architect/project/use-create-project';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';
import { fetchAllImages } from '@/shared/constants';

import { ProjectRealizationSchema } from '../schemas';
import type { ProjectRealizationType } from '../types';

export const useFinalStep = () => {
  const { formData, onHandleBack, onHandleNext } =
    useFormStepper<ProjectRealizationType>();

  const { handleSubmit, control } = useCustomForm(ProjectRealizationSchema, {
    projectName: formData.projectName,
    architect: formData.architect,
    needs: formData.needs,
    address: formData.address,
    city: formData.city,
    workSurface: formData.workSurface,
    description: formData.description,
    architecturalStyle: formData.architecturalStyle,
    realizationImages: formData.realizationImages,
    projectCategory: formData.projectCategory,
  });

  const { mutate, isError, error, isSuccess, data } = useCreateProjectApi();

  const onSubmit = async () => {
    await fetchAllImages(formData.realizationImages).then(async (files) => {
      let newData = new FormData();
      newData.append(
        'architectural_style',
        String(formData.architecturalStyle)
      );
      newData.append('address', String(formData.city));
      newData.append('description', formData.description);
      newData.append('project_category', String(formData.projectCategory));
      newData.append('project_name', formData.projectName);
      newData.append('workSurface', String(formData.workSurface));

      formData.needs.forEach((need: any, index: number) => {
        newData.append(`needs[${index}]`, need);
      });
      files.forEach((file) => {
        newData.append('realizationImages', file);
      });
      mutate(newData);
    });
  };

  const { data: categories } = useCategoriesApi();
  const { data: styles } = useStylesApi();
  const { data: services } = useNeedsApi();

  const categoryName = categories?.filter(
    (category) => category.id === formData.projectCategory
  )[0].label;

  const styleName = styles?.filter(
    (style) => style.id === formData.architecturalStyle
  )[0].label;

  const servicesObjects = services?.filter((service) =>
    formData.needs.includes(service.id)
  );

  return {
    onSubmit,
    formData,
    onHandleBack,
    onHandleNext,
    handleSubmit,
    control,
    categoryName,
    styleName,
    servicesObjects,
    isError,
    error,
    isSuccess,
    data,
  };
};

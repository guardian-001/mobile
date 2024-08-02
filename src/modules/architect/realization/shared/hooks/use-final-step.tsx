import { useRouter } from 'expo-router';

import type { Response } from '@/api/architect/project';
import {
  useCategoriesApi,
  useNeedsApi,
  useStylesApi,
} from '@/api/architect/project';
import {
  useCreateProjectApi,
  useCreateProjectImagesApi,
} from '@/api/architect/project/use-create-project';
import { useFormStepper } from '@/shared';
import { fetchAllImages } from '@/shared/constants';

import type { ProjectRealizationType } from '../types';

export const useFinalStep = () => {
  const { formData, onHandleBack, onHandleNext } =
    useFormStepper<ProjectRealizationType>();

  const { mutate, isError, error, isSuccess, data } = useCreateProjectApi();
  const imageUpload = useCreateProjectImagesApi();
  const router = useRouter();

  const handleProject = async () => {
    await fetchAllImages(formData?.realizationImages ?? []).then((files) => {
      let newData = new FormData();

      const project = { ...formData };
      delete project.realizationImages;
      console.log(project);
      files.forEach((file) => {
        newData.append('realization_images', file);
      });

      mutate(project, {
        onSuccess: (dataResponse: Response) => {
          console.log(dataResponse.data.id);
          console.log({
            imgs: newData,
            id: dataResponse.data.id,
          });
          imageUpload.mutate(
            {
              imgs: newData,
              id: dataResponse.data.id,
            },
            {
              onSuccess: () => {
                router.replace(`(architect)/(private)/profile`);
              },
              onError: (error) => {
                console.log('&:', error);
              },
            }
          );
        },
        onError: (error) => {
          console.log('z:', error);
          // router.replace(`(architect)/(private)/profile`);
        },
      });
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
    handleProject,
    formData,
    onHandleBack,
    onHandleNext,
    categoryName,
    styleName,
    servicesObjects,
    isError,
    error,
    isSuccess,
    data,
  };
};

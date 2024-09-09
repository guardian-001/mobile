import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getArchitectProfileById } from '@/services/shared/architect-services';

import type {
  ArchitectProfileInfoType,
  ArchitectProfileVariables,
} from './types';
type Response = ArchitectProfileInfoType;

const fetchArchitectProfileById = async ({
  architectId,
}: ArchitectProfileVariables): Promise<Response> => {
  return getArchitectProfileById(architectId);
};
export const useArchitectProfileByIdApi = createQuery<
  Response,
  ArchitectProfileVariables,
  AxiosError
>({
  queryKey: [
    'architectProfileById',
    (variables: ArchitectProfileVariables) => variables.architectId,
  ],
  fetcher: fetchArchitectProfileById,
});

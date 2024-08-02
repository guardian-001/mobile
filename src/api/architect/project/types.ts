import type { AxiosResponse } from 'axios';

import type { ProjectRealizationType } from '@/modules/architect/realization/shared/types';
import type { Category, Need, Style } from '@/types';

export type ResponseStyle = Style[];

export type ResponseNeeds = Need[];

export type Response = AxiosResponse;
export type VariablesCreateProject = ProjectRealizationType;
export type VariablesCreateProjectImages = {
  imgs: FormData;
  id: string;
};
export type ResponseCategory = Category[];
export type Variables = void;

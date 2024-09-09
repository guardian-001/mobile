import type { AxiosResponse } from 'axios';

import type { ProjectRealizationType } from '@/modules/architect/realization/shared/types';
import type { Category, Need, Style } from '@/types';

import type { ArchitectProfileInfoType } from '../profile/types';

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
export type RealizationsVariables = {
  categories: number[];
  properties: number[];
};

export type RealizationImage = {
  id: number;
  image: string;
};
export type ProjectItem = {
  id: number;
  projectName: string;
  architect: ArchitectProfileInfoType;
  projectCategory: Category;
  needs: Need[];
  address: string;
  city: string;
  workSurface: string;
  description: string;
  architecturalStyle: Style;
  realizationImages: RealizationImage[];
  propertyType: {
    id: number;
    label: string;
    icon: string;
    projectCategory: number;
  };
};

export type ProjectItemList = ProjectItem[];
export type ProjectRealizationsVariables = { architectId: number };

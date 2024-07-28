import type { AxiosResponse } from 'axios';

import type { Category, Need, Style } from '@/types';

export type ResponseStyle = Style[];

export type ResponseNeeds = Need[];

export type Response = AxiosResponse;
export type VariablesCreateProject = FormData;
export type ResponseCategory = Category[];
export type Variables = void;

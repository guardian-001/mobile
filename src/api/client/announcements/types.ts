import type { TagType } from '@/types';

export type resultType = {
  id: number;
  label: string;
  icon: string;
};
export type workType = {
  id: number;
  header: string;
  description: string;
};
export type Response = resultType[];
export type ResponseWorkType = workType[];
export type Variables = void;
export type VariablesStep2 = { architectSpeciality: number };
export type VariablesStep4 = { projectCategory: number };
export type VariablesStep5 = { propertyType: number };
export type VariablesStep6 = { propertyType: number; workType: number };
export type VariablesStep9 = { propertyType: number };
export type VariablesStep10 = { propertyType: number; workType: number };

export type CombinedData = {
  cities: TagType[];
  terrainSurfaces: TagType[];
  workSurfaces: TagType[];
};

export type PropertyFeature = {
  icon: string;
  id: number;
  label: string;
  propertyType: number;
};

export type PropertyResponse = {
  data: PropertyFeature[];
  eliminateStep: boolean;
  newConstruction: boolean;
};
export type ArchitecturalStyleResponse = {
  data: resultType[];
  eliminateStep: boolean;
};
export type ProjectExtensionsResponse = {
  data: PropertyFeature[];
  eliminateStep: boolean;
};

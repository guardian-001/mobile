import type { TxKeyPath } from '@/core';

export type InspirationRequestType = {
  projectCategory: number;
  propertyType: number[];
};

export type projectCategoryFormType = Pick<
  InspirationRequestType,
  'projectCategory'
>;
export type propertyTypeFormType = Pick<InspirationRequestType, 'propertyType'>;

export type StepContent = {
  component: React.ReactElement;
};
type Project = {
  id: string;
  architectName: string;
  publishedDate: string;
  projectCategory: string;
  workType: string;
  architectSpeciality: string;
  architecturalStyle: string;
  propertyType: string;
  city: string;
  terrainSurface: string;
  budget: string;
  description: string;
  projectImages: string[];
};
export type ProjectItemProps = { item?: Project };

export type Tab = {
  id: string;
  label: TxKeyPath;
  icon: React.ComponentType<{ color: string }>;
};
export type details = {
  title: TxKeyPath;
  value: string;
  icon: React.ComponentType;
};

import type { ProjectItem } from '@/api/architect/project';
import type { TxKeyPath } from '@/core';

export type InspirationRequestType = {
  projectCategory: number[];
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

export type ProjectItemProps = { item?: ProjectItem };

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

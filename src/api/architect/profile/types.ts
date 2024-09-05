import type { User } from '@/api/auth';
import type { Category, Need, Style } from '@/types';

export type ArchitectProfileInfoType = {
  id: number;
  user: User;
  architecturalStyles: Style[];
  projectCategories: Category[];
  propertyTypes: {
    id: number;
    label: string;
    icon: string;
    projectCategory: number;
  }[];
  workTypes: {
    id: number;
    header: string;
    description: string;
  }[];
  architectSpeciality: {
    id: number;
    label: string;
    icon: string;
  };
  needs: Need[];
  subscriptionPlan: null | string;
  terrainSurfaces: string[];
  workSurfaces: string[];
  preferredLocations: string[];
  budgets: string[] | number[];
  profileCompletion: number;
  badge: string;
  realizationCount: number;
  createdAt: string;
  updatedAt: string;
  address: string;
  architectIdentifier: string | null;
  bio: string;
  companyName: string;
  companyLogo: string | null;
  presentationVideo: string | null;
  projectComplexity: string;
  yearsExperience: string;
};

export type ArchitectProfileInfoListType = ArchitectProfileInfoType[];

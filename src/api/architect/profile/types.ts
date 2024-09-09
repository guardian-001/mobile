import type { User } from '@/api/auth';
import type { Category, Need, Style } from '@/types';

export type SubscriptionPlan = {
  id: number;
  planName: string;
  planPrice: string;
  remainingTokens: number;
  active: boolean;
  freePlan: boolean;
  services: {
    service: {
      id: number;
      description: string;
      permissions: any[];
      specialIdentifier: string;
    };
    included: boolean;
  }[];
  startDate: string | null;
  endDate: string | null;
};

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
  subscriptionPlan: SubscriptionPlan;
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

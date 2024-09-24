import type { User } from '@/api/auth';
import type { resultType, workType } from '@/api/client/announcements/types';

export type SubscriptionPlan = {
  id: number;
  planName: string;
  planPrice: string;
  remainingTokens: number;
  active: boolean;
  freePlan: boolean;
  services: { id: number; description: string; permissions: any[] }[];
  startDate: string | null;
  endDate: string | null;
};
export type CommunType = {
  id: number;
  name: string;
};
export type Need = {
  id: number;
  label: string;
  icon: string;
  description: string;
  architectSpeciality: number;
};
export type OldReview = {
  reviewer: string;
  comment: string;
  note: string;
  date: string;
};
export type serviceApprouve = {
  id: number;
  label: string;
  icon: string;
};
export type OldArchitect = {
  id: number;
  user: User;
  architecturalStyles: resultType[];
  projectCategories: resultType[];
  propertyTypes: resultType[];
  workTypes: workType[];
  architectSpeciality: resultType;
  needs: Need[];
  subscriptionPlan?: SubscriptionPlan;
  terrainSurfaces: CommunType[];
  workSurfaces: CommunType[];
  preferredLocations: CommunType[];
  budgets: CommunType[];
  createdAt: string;
  updatedAt: string;
  address: string;
  architectIdentifier: string;
  bio: string;
  companyName: string;
  companyLogo: string | null;
  presentationVideo: string | null;
  projectComplexity: string;
  yearsExperience: string;
  reviews: OldReview[];
  servicesApprouves: serviceApprouve[];
};

type clientReview = {
  id: number;
  user: User;
  isVerified: boolean;
};
export type Review = {
  id: number;
  architectId: number;

  client: clientReview;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
};

export type ReviewRequest = {
  reportedReviewId: number;
  reportReasons: string[];
};

// export interface Realization {
//   id: number
//   projectName: string
//   architect: Architect
//   projectCategory: ProjectCategory
//   needs: Need[]
//   address: string
//   city: string[]
//   workSurface: string
//   description: string
//   realizationImages: ImageInfo[]
//   architecturalStyle: Style
// }

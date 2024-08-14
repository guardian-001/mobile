import type { User } from '../auth';
import type { resultType } from '../client/announcements/types';

export type ResponseObject = {
  user: User;
};
export type CommunType = {
  id: number;
  name: string;
};
export type ProfileSocialLinksFormData = {
  instagram?: string;
  website?: string;
  facebook?: string;
};
export type SupplierUser = {
  id: number;
  user: User;
  socialLinks: ProfileSocialLinksFormData;
  specialityType: resultType[];
  createdAt: string;
  updatedAt: string;
  companyAddress: string;
  companySpeciality: string;
  bio: string;
  companyName: string;
  presentationVideo: string;
  appearance: string;
  isPublic: boolean;
  profileImage: string;
  coverImage: string;
};

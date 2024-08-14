import type { User } from '@/api/auth';
import type { SpecialityType } from '@/modules/supplier/create-account/types';

export type SpecialityTypeResponse = {
  id: number;
  label: string;
  icon: string;
  content: string;
};
export type supplierSocialMedia = {
  id: number;
  createdAt: string;
  updatedAt: string;
  facebook: string;
  instagram: string;
  website: string;
};
export type SupplierRequest = {
  id: number;
  user: User;
  socialLinks: supplierSocialMedia;
  specialityType: SpecialityType;
  createdAt: string;
  updatedAt: string;
  profileImage: string;
  coverImage: string;
  isPublic: boolean;
  companyAddress: string;
  companySpeciality: string;
  bio: string;
  companyName: string;
  presentationVideo: string;
  appearance: string;
};

export type SupplierProfileInfoType = {
  id: number;
  user: User;
  socialLinks: supplierSocialMedia;
  specialityType: SpecialityType;
  createdAt: string;
  updatedAt: string;
  profileImage: string;
  coverImage: string;
  isPublic: boolean;
  companyAddress: string;
  companySpeciality: string;
  bio: string;
  companyName: string;
  presentationVideo: string;
  appearance: string;
};

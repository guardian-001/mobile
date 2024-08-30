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

export type createCollectionRequestData = {
  title: string;
  category: string;
  visibility: boolean;
  appearance: string;
};

type ProductImage = {
  id: number;
  image: string;
};

export type createProductRequestData = {
  id: number;
  name: string;
  price: number;
  description: string;
  productImages: ProductImage[];
  collectionCategory: string;
  collectionTitle: string;
  order: number;
  display: boolean;
};

export type UpdateVisibilityRequest = { id: number; visibility: boolean };

export type SupplierProfileInfoListType = SupplierProfileInfoType[];

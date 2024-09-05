import type { User } from '@/api/auth';
import type { SpecialityType } from '@/modules/supplier/create-account/types';

export type ProductImage = {
  id: number;
  image: string;
};
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

export type Product = {
  collectionCategory: string;
  collectionTitle: string;
  description: string;
  display: boolean;
  id: number;
  name: string;
  order: number;
  price: string;
  productImages: ProductImage[];
  visibility: boolean;
};
export type Collection = {
  appearance: string;
  categoryLabel: string;
  display: boolean;
  id: number;
  products: Product[];
  supplier: string;
  title: string;
  visibility: boolean;
};

export type SupplierProfileInfoType = {
  id: number;
  user: User;
  socialLinks: supplierSocialMedia;
  specialityType: SpecialityType[];
  createdAt: string;
  updatedAt: string;
  profileImage: string;
  coverImage: string;
  isPublic: boolean;
  companyAddress: string;
  companySpeciality: string;
  bio: string;
  companyName: string;
  presentationVideo: string | null;
  catalogVisibility: boolean;
  showrooms: any[];
  supplierCollections: Collection[];
  supplierCoverImages: string[];
};

export type createCollectionRequestData = {
  title: string;
  category: string;
  visibility: boolean;
  appearance: string;
};

export type UpdateVisibilityRequest = { id: number; visibility: boolean };

export type SupplierProfileInfoListType = SupplierProfileInfoType[];

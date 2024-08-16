import type { User } from '@/api/auth';
import type { TagType } from '@/types';
import type { Image } from '@/types/announcement';

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
export type ArchitectSpecialityVariables = { architectSpeciality: number };
export type ProjectCategoryVariables = { projectCategory: number };
export type PropertyTypeVariables = { propertyType: number };
export type PropertyAndWorkTypeVariables = {
  propertyType: number;
  workType: number;
};
export type VariablesImagesMutation = { imgs: FormData; id: string };

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

export type PieceRenovateDetail = {
  pieceRenovate: resultType;
  number: number;
};
export type Project = {
  address: string;
  adminNote: string | null;
  architectSpeciality: resultType;
  architecturalStyle: resultType;
  budget: string;
  city: string;
  client: {
    id: number;
    isVerified: boolean;
    user: User;
  };
  createdAt: string;
  description: string;
  id: number;
  needs: Response;
  notes: any[];
  numberFloors: number;
  piecesRenovate: PieceRenovateDetail[];
  projectCategory: resultType;
  projectExtensions: Response;
  projectImages: Image[];
  propertyType: resultType;
  status: string;
  terrainSurface: string;
  workSurface: string;
  workType: workType;
};

export type ProjectList = Project[];

export type AnnouncementType = {
  architectSpeciality: number;
  needs: number[];
  projectCategory: number;
  propertyType: number;
  workType: number;
  piecesRenovate?: {
    [key: number]: number;
  }[];
  address: string;
  city: string;
  terrainSurface: string;
  workSurface: string;
  budget: string;
  description: string;
  architecturalStyle?: number;
  projectExtensions?: number[];
  projectImages: string[];
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  rules: boolean;
  receiveNotifications?: boolean;
  currentLanguage: string;
};

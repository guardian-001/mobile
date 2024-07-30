export type Image = {
  name: string;
  uri: string;
  type: string;
};
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
  terrainSurface?: string;
  workSurface: string;
  budget: string;
  description: string;
  architecturalStyle?: number;
  projectExtensions?: number[];
  projectImages?: Image[];
  rollback?: boolean;
  newConstruction?: boolean;
  currentLanguage: string;
  numberFloors?: number;
  client: {
    user: {
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      rules: boolean;
      receiveNotifications?: boolean;
      userType: string;
    };
  };
};

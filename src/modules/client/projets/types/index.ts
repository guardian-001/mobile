export type ProjectCardProps = {
  date: string;
  status: string;
  workType: string;
  architectSpeciality: string;
  propertyType: string;
  city: string;
  terrainSurface: string;
  budget: string;
  architectesIntéressés?: string[];
  searchStatus: boolean;
};

export type HeaderProps = {
  formattedDate: string;
  status: string;
};

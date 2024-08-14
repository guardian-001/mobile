export type SpecialityTypeResponse = {
  id: number;
  label: string;
  icon: string;
  content: string;
};

export type FirstConnectionRequest = {
  companyAddress: string;
  companyName: string;
  companySpeciality: string;
  email: string;
  phoneNumber: string;
  appearance: string;
  specialityType: number[];
};

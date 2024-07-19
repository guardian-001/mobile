export type SignupRequest = {
  architectSpeciality: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  architectIdentifier: string;
  date: string;
  timeSlot: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type User = {
  id?: number;
  username?: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  userType?: string;
  image?: string;
};

export type LoginResponse = {
  access: string;
  refresh: string;
  user: User;
};

export type ForgetPassRequest = {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

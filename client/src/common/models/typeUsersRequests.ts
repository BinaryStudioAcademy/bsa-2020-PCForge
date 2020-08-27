import { User } from './user';

export type TypeUsersRequests = {
  id: number;
  requestBody: string;
  requestedType: string;
  requestedHardwareType: string;
  userId: number;
  user: User;
  createdAt: Date;
  updatedAt: Date;
};

export type TypeUsersRequestsCreationAttributes = {
  requestBody: string;
  requestType: string;
  requestedHardwareType: string;
  userId: number;
};

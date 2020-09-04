import { User } from 'common/models/user';

export type TypeLoggedUser = {
  logged_in: boolean;
  user: User;
};

import { TypeUser } from 'common/models/typeUser';
import { Game } from 'common/models/typeUserGame';
import { UserActionTypes } from 'containers/UserPage/logic/actionTypes';
import { SetupType } from 'common/models/typeSetup';

export enum UserPageTabs {
  Games = 0,
  Setups = 1,
}

export interface IUserInfoProps {
  user: TypeUser;
  updateUser: (data: TypeUser, avatarData?: Blob) => UserActionTypes;
  isCurrentUser: boolean;
}

export interface IPreferencesSectionProps {
  openTab: UserPageTabs;
  setTab: (tab: UserPageTabs) => UserActionTypes;
  isCurrentUser: boolean;
  userGames: Game[];
  addUserGame: (id: number, gameId: number) => UserActionTypes;
  deleteUserGame: (id: number, gameId: number) => UserActionTypes;
  filteredGames: Game[];
  loadFilteredGames: (searchString: string) => UserActionTypes;
  setups: SetupType[];
  deleteUserSetup: (userId: number, setupId: number) => UserActionTypes;
  editUserSetup: (setupId: number) => UserActionTypes;
}

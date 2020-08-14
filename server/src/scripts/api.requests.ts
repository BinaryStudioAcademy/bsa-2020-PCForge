export interface PostAuthRequest {
  Body: {
    email: string;
    password: string;
  };
}
export interface IsUserAuthenticated {
  Body: {
    token: string;
  };
}
import { CommentCreationModel } from './api.models';
export interface GetAllCommentsRequest {
  Params: { id: string };
  Querystring: ICommentFilter;
}
export interface GetOneCommentRequest {
  Params: { id: string };
}
export interface PostCommentRequest {
  Body: CommentCreationModel;
}
export interface PutCommentRequest {
  Params: { id: string };
  Body: CommentCreationModel;
}
export interface DeleteCommentRequest {
  Params: { id: string };
}
import { CpuCreationModel } from './api.models';
export interface GetAllCpusRequest {
  Querystring: ICpuFilter;
}
export interface GetOneCpuRequest {
  Params: { id: string };
}
export interface PostCpuRequest {
  Body: CpuCreationModel;
}
export interface PutCpuRequest {
  Params: { id: string };
  Body: CpuCreationModel;
}
export interface DeleteCpuRequest {
  Params: { id: string };
}
import { GameCreationModel } from './api.models';
export interface GetAllGamesRequest {
  Params: { id: string };
  Querystring: IGameFilter;
}
export interface GetOneGameRequest {
  Params: { id: string };
}
export interface PostGameRequest {
  Body: GameCreationModel;
}
export interface PutGameRequest {
  Params: { id: string };
  Body: GameCreationModel;
}
export interface DeleteGameRequest {
  Params: { id: string };
}
import { GpuCreationModel } from './api.models';
export interface GetAllGpusRequest {
  Querystring: IFilter;
}
export interface GetOneGpuRequest {
  Params: { id: string };
}
export interface PostGpuRequest {
  Body: GpuCreationModel;
}
export interface PutGpuRequest {
  Params: { id: string };
  Body: GpuCreationModel;
}
export interface DeleteGpuRequest {
  Params: { id: string };
}
import { MotherboardCreationModel } from './api.models';
export interface GetAllMotherboardsRequest {
  Querystring: IMotherboardFilter;
}
export interface GetOneMotherboardRequest {
  Params: { id: string };
}
export interface PostMotherboardRequest {
  Body: MotherboardCreationModel;
}
export interface PutMotherboardRequest {
  Params: { id: string };
  Body: MotherboardCreationModel;
}
export interface DeleteMotherboardRequest {
  Params: { id: string };
}
export interface GetNewsRequest {
  Params: { id: string };
}
export interface PostNewsRequest {
  Body: {
    title: string;
    content: string;
    image: string;
  };
}
export interface PutNewsRequest {
  Params: { id: string };
  Body: {
    title: string;
    content: string;
    image: string;
  };
}
export interface DeleteNewsRequest {
  Params: { id: string };
}
import { PowerSupplyCreationModel } from './api.models';
export interface GetOnePowerSuppliesRequest {
  Querystring: IFilter;
}
export interface GetOnePowerSupplyRequest {
  Params: { id: string };
}
export interface PostPowerSupplyRequest {
  Body: PowerSupplyCreationModel;
}
export interface PutPowerSupplyRequest {
  Params: { id: string };
  Body: PowerSupplyCreationModel;
}
export interface DeletePowerSupplyRequest {
  Params: { id: string };
}
import { RamCreationModel } from './api.models';
export interface GetOneRamRequest {
  Params: { id: string };
}
export interface GetAllRamsRequest {
  Querystring: IRamFilter;
}
export interface PostRamRequest {
  Body: RamCreationModel;
}
export interface PutRamRequest {
  Params: { id: string };
  Body: RamCreationModel;
}
export interface DeleteRamRequest {
  Params: { id: string };
}
import { RamTypeCreationModel } from './api.models';
export interface GetAllRamTypesRequest {
  Querystring: IFilter;
}
export interface GetOneRamTypeRequest {
  Params: { id: string };
}
export interface PostRamTypeRequest {
  Body: RamTypeCreationModel;
}
export interface PutRamTypeRequest {
  Params: { id: string };
  Body: RamTypeCreationModel;
}
export interface DeleteRamTypeRequest {
  Params: { id: string };
}
import { RateCreationModel } from './api.models';
export interface GetAllRatesRequest {
  Params: { id: string };
  Querystring: IRateFilter;
}
export interface GetOneRateRequest {
  Params: { id: string };
}
export interface PostRateRequest {
  Body: RateCreationModel;
}
export interface PutRateRequest {
  Params: { id: string };
  Body: RateCreationModel;
}
export interface DeleteRateRequest {
  Params: { id: string };
}
import { SetupCreationModel } from './api.models';
export interface GetSetupRequest {
  Params: { id: string };
}
export interface PostSetupRequest {
  Body: SetupCreationModel;
}
export interface PutSetupRequest {
  Params: { id: string };
  Body: SetupCreationModel;
}
export interface DeleteSetupRequest {
  Params: { id: string };
}
import { SocketCreationModel } from './api.models';
export interface GetAllSocketsRequest {
  Querystring: IFilter;
}
export interface GetOneSocketRequest {
  Params: { id: string };
}
export interface PostSocketRequest {
  Body: SocketCreationModel;
}
export interface PutSocketRequest {
  Params: { id: string };
  Body: SocketCreationModel;
}
export interface DeleteSocketRequest {
  Params: { id: string };
}
import { TopGameCreationModel } from './api.models';
export interface GetAllTopGamesRequest {
  Querystring: IFilter;
}
export interface GetOneTopGameRequest {
  Params: { id: string };
}
export interface PostTopGameRequest {
  Body: TopGameCreationModel;
}
export interface PutTopGameRequest {
  Params: { id: string };
  Body: TopGameCreationModel;
}
export interface DeleteTopGameRequest {
  Params: { id: string };
}
export interface GetOneUserRequest {
  Params: { id: string };
}
export interface PostUserRequest {
  Body: {
    name: string;
    password: string;
    email: string;
    avatar: string;
  };
}
export interface PutUserRequest {
  Params: { id: string };
  Body: {
    name: string;
    password: string;
    email: string;
    avatar: string;
    oldPassword: string;
  };
}
export interface DeleteUserRequest {
  Params: { id: string };
}

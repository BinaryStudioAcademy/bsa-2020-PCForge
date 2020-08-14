export interface CommentModel {
  id: number;
  commentableType: string;
  userId: number;
  commentableId: number;
  createdAt: Date;
  updatedAt: Date;
  value: string;
}
export interface CommentCreationModel {
  commentableType: string;
  userId: number;
  commentableId: number;
  value: string;
}
export interface CpuModel {
  id: number;
  name: string;
  performance: number;
  clockspeed: number;
  tdp: number;
  cores: number;
  class: string;
  socket: SocketModel;
  createdAt: Date;
  updatedAt: Date;
}

export interface CpuCreationModel {
  name: string;
  performance: number;
  clockspeed: number;
  tdp: number;
  cores: number;
  class: string;
  socketId: number;
}

export interface GameModel {
  id: number;
  name: string;
  year: number;
  image: string;
  description: string;
  recommendedRamSize: number;
  minimalRamSize: number;
  createdAt: Date;
  updatedAt: Date;
  recommendedCpu: CpuModel;
  minimalCpu: CpuModel;
  recommendedGpu: GpuModel;
  minimalGpu: GpuModel;
}

export interface GameCreationModel {
  name: string;
  year: number;
  image: string;
  description: string;
  recommendedRamSize: number;
  minimalRamSize: number;
  recommendedCpuId: number;
  recommendedGpuId: number;
  minimalCpuId: number;
  minimalGpuId: number;
}
export interface GpuModel {
  id: number;
  name: string;
  interface: string;
  memorySize: number;
  coreClocks: number;
  opengl: string;
  tdp: number;
  performance: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface GpuCreationModel {
  name: string;
  interface: string;
  memorySize: number;
  coreClocks: number;
  opengl: string;
  tdp: number;
  performance: number;
}

export interface MotherboardModel {
  id: number;
  name: string;
  socket: SocketModel;
  ramType: RamTypeModel;
  createdAt: Date;
  updatedAt: Date;
}

export interface MotherboardCreationModel {
  name: string;
  socketId: number;
  ramTypeId: number;
}

export interface NewsModel {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface NewsCreationModel {
  title: string;
  content: string;
  image: string;
}

export interface PowerSupplyModel {
  id: number;
  name: string;
  power: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PowerSupplyCreationModel {
  name: string;
  power: number;
}

export interface RamModel {
  id: number;
  name: string;
  memorySize: number;
  frequency: number;
  power: number;
  type: RamTypeModel;
  createdAt: Date;
  updatedAt: Date;
}

export interface RamCreationModel {
  name: string;
  memorySize: number;
  frequency: number;
  typeId: number;
  power: number;
}

export interface RamTypeModel {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RamTypeCreationModel {
  name: string;
}

export interface RateModel {
  id: number;
  ratebleType: string;
  userId: number;
  ratebleId: number;
  createdAt: Date;
  updatedAt: Date;
  value: number;
}
export interface RateCreationModel {
  ratebleType: string;
  userId: number;
  ratebleId: number;
  value: number;
}
export interface SetupModel {
  id: number;
  title: string;
  description: string;
  image: string;
  authorId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface SetupCreationModel {
  title: string;
  description: string;
  image: string;
  authorId: number;
}

export interface SocketModel {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SocketCreationModel {
  name: string;
}

export interface TopGameModel {
  id: number;
  game: GameModel;
  createdAt: Date;
  updatedAt: Date;
}

export interface TopGameCreationModel {
  gameId: number;
}

export interface UserModel {
  id: number;
  name: string;
  password: string;
  email: string;
  isAdmin: boolean;
  avatar: string | null;
  verifyEmailToken: string | null;
  resetPasswordToken: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserCreationModel {
  name: string;
  password: string;
  email: string;
  isAdmin: boolean;
  avatar: string | null;
  verifyEmailToken: string | null;
  resetPasswordToken: string | null;
}

export interface UserGameModel {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface UserGameModel extends Model<UserGameModel>, UserGameModel {}

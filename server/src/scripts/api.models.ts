export interface CommentModel {
  id: number;
  commentableType: string;
  commentableId: number;
  createdAt: Date;
  updatedAt: Date;
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

export interface MotherboardModel {
  id: number;
  name: string;
  socket: SocketModel;
  ramType: RamTypeModel;
  createdAt: Date;
  updatedAt: Date;
}

export interface NewsModel {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface PowerSupplyModel {
  id: number;
  name: string;
  power: number;
  createdAt: Date;
  updatedAt: Date;
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

export interface RamTypeModel {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RateModel {
  id: number;
  ratebleType: string;
  ratebleId: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface SetupModel {
  id: number;
  title: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface SocketModel {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TopGameModel {
  id: number;
  game: GameModel;
  createdAt: Date;
  updatedAt: Date;
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

export interface UserGameModel {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

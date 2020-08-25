export interface Game {
    id: number;
    name: string;
    year: number;
    image: string;
    description:string;
    minimalRamSize: number;
    recommendedRamSize: number;
    minimalCpuId: number;
    recommendedCpuId:number;
    minimalGpuId: number;
    createdAt: Date;
    updatedAt: Date;

}

export interface UserGame {
  id: number;
  userId: number;
  gameId: number;
  createdAt: Date;
  updatedAt: Date;
  game: Game;
}
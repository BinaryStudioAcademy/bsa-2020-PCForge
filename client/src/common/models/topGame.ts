import { Game } from './game';

export interface TopGame {
  id: number;
  game: Game;
  createdAt: Date;
  updatedAt: Date;
}

export interface RateCreationAttributes {
  ratebleId: number;
  ratebleType: 'game' | 'setup' | '';
  value: number;
}

export interface Rate {
  id: number;
  ratebleType: 'game' | 'setup' | '';
  userId: number;
  ratebleId: number;
  value: number;
  createdAt: string;
  updatedAt: string;
}

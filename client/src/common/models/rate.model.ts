export interface RateCreationAttributes {
  ratebleId: number;
  ratebleType: 'game' | 'setup' | 'motherboard' | 'powersupply' | 'ram' | 'cpu' | 'gpu' | 'ssd' | 'hdd';
  value: number;
}

export interface Rate {
  id: number;
  ratebleType: 'game' | 'setup' | 'motherboard' | 'powersupply' | 'ram' | 'cpu' | 'gpu' | 'ssd' | 'hdd';
  userId: number;
  ratebleId: number;
  value: number;
  createdAt: string;
  updatedAt: string;
}

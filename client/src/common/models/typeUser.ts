export type TypeUser = {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  password?: string;
};

export type TypeUserUpdate = TypeUser & {
  currentPassword?: string;
};

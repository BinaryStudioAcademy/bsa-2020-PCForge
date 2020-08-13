export interface User {
  id: number;
  name: string | null;
  email: string;
  password: string;
  avatar: string | null;
  isAdmin: boolean;
  createdAt: string;
  updateAt: string;
  verifyEmailToken: string | null;
  resetPasswordToken: string | null;
}

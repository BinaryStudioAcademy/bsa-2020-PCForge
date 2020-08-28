export interface User {
  id: number;
  name: string | null;
  email: string;
  avatar: string | null;
  isAdmin: boolean;
  createdAt: string;
  updateAt: string;
  emailVerified: boolean;
}

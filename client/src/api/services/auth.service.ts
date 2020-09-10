import { User } from 'common/models/user';
import { IAuthPayload, IRegPayload } from 'containers/Auth/interfaces';
import { getToken, setToken } from 'helpers/tokenHelper';
import api from 'api/webApiHelper';
import { TypeLoggedUser } from 'common/models/typeLoggedUser';

export class AuthService {
  async login(data: IAuthPayload): Promise<User> {
    const apiRoute = '/auth/login';
    const response = await api.post(apiRoute, data);
    setToken(response.token);

    return response.user;
  }

  async verifyEmail({ token }: { token: string }): Promise<{ verified: boolean; user: User }> {
    const apiRoute = `/auth/verify-email/${token}`;
    const response = await api.get(apiRoute);
    setToken(response.token);
    return response.user;
  }

  async register(request: IRegPayload): Promise<User> {
    const apiRoute = '/users';
    const response = await api.post(apiRoute, request);
    return response;
  }

  async authGoogle(data: { token: string }): Promise<User> {
    const apiRoute = `/auth/google-auth`;
    const response = await api.post(apiRoute, data);
    setToken(response.token);
    return response.user;
  }

  async resetPasswordRequest(email: string): Promise<void> {
    const apiRoute = '/auth/reset-password/request';
    await api.post(apiRoute, { email });
  }

  async resetPassword(data: { userId: string; token: string; newPassword: string }): Promise<void> {
    const apiRoute = '/auth/reset-password';
    await api.post(apiRoute, data);
  }

  async getUserByToken(token: string): Promise<TypeLoggedUser> {
    const apiRoute = 'auth/logged_in';
    const response = await api.post(apiRoute, { token });
    return response;
  }
}

export const authService = new AuthService();

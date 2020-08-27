import { User } from 'common/models/user';
import { IAuthPayload, IRegPayload } from 'containers/Auth/interfaces';
import { setToken } from 'helpers/tokenHelper';
import api from 'api/webApiHelper';

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
    return response;
  }

  async register(request: IRegPayload): Promise<User> {
    const apiRoute = '/users';
    const response = await api.post(apiRoute, request);
    return response;
  }

  async resetPasswordRequest(email: string): Promise<void> {
    const apiRoute = '/auth/reset-password/request';
    await api.post(apiRoute, { email });
  }

  async resetPassword(data: { userId: string; token: string; newPassword: string }): Promise<void> {
    const apiRoute = '/auth/reset-password';
    await api.post(apiRoute, data);
  }
}

export const authService = new AuthService();

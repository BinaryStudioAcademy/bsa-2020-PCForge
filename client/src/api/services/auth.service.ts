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

  async createUser(data: IAuthPayload): Promise<User> {
    const apiRoute = '/users';
    const response = await api.post(apiRoute, data);
    return response;
  }

  async register(request: IRegPayload): Promise<User> {
    const apiRoute = '/users';
    const response = await api.post(apiRoute, request);
    return response;
  }
}

export const authService = new AuthService();

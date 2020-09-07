import api from '../webApi.helper';
import { UserLoginAttributes, User } from '../../common/models/user.model';
import { setToken } from '../../common/helpers/token.helper';

export class AuthService {
  async login(data: UserLoginAttributes): Promise<User> {
    const apiRoute = '/auth/login';
    
    const response = await api.post(apiRoute, data);
    await setToken(response.token);

    return response.user;
  }
}

export const authService = new AuthService;

import api from '../webApi.helper';
import { UserLoginAttributes } from 'src/common/models/user';
import { setToken, getToken } from '../../common/helpers/token.helper';

export class AuthService {
  async login(data: UserLoginAttributes): Promise<any> {
    const apiRoute = '/auth/login';
    
    const response = await api.post(apiRoute, data);
    await setToken(response.token);
    const token = await getToken();
    console.log(token);

    return response.user;
  }
}

export const authService = new AuthService;

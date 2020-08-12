import { User } from 'common/models/user';
import { IAuthPayload } from 'containers/Auth/interfaces';

export class AuthService {
  async login(data: IAuthPayload): Promise<User> {
    const apiRoute = 'http://localhost:5001/api/auth/login';

    const response = await fetch(apiRoute, { method: 'POST', body: JSON.stringify(data) });
    const responseJSON = await response.json();
    if (!response.ok) {
      throw new Error(responseJSON.error);
    }

    const token: string = responseJSON.token;
    localStorage.setItem('token', token);
    return responseJSON.user;
  }

  async createUser(email: string, password: string) {
    const apiRoute = 'http://localhost:5001/api/users';
    const data = {
      email,
      password,
    };
    const response = await fetch(apiRoute, { method: 'POST', body: JSON.stringify(data) });
    return response.json();
  }
}

export const authService = new AuthService();

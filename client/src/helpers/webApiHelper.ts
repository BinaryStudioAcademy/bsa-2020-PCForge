import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { getToken } from './tokenHelper';

class Api {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async get(url: string, params?: any) {
    await this.checkAuthToken();
    return await this.instance
      .get(url, {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
        params,
      })
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  async post(url: string, data: any) {
    return await this.instance
      .post(url, data, {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      })
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  async put(url: string, data: any) {
    return await this.instance
      .put(url, data, {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      })
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  async delete(url: string, data?: any) {
    return await this.instance
      .delete(url, {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
        data,
      })
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  private handleResponse(response: AxiosResponse) {
    return response.data;
  }

  private handleError(error: AxiosError) {
    if (error.response) {
      return { error: error.response.data };
      // throw new Error(error.response.data.message);
    } else if (error.request) {
      return { error: error.request.responseText };
      // throw new Error(error.request.responseText);
    } else {
      return { error: error.message };
      // throw new Error(error.message);
    }
  }

  private async checkAuthToken() {
    try {
      // check auth token success
    } catch (error) {
      // on error
    }
  }
}

export default new Api();

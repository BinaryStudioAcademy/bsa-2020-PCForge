/* eslint-disable @typescript-eslint/ban-types */
import axios from 'axios';
import { IFilter } from 'models/api.filters';

export interface IWithMetaResponse<T> {
  meta: {
    globalCount: number;
  };
  data: T[];
}

export interface IErrorResponse {
  message: string;
  error: string;
  statusCode: number;
}

class Api {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static getError(error: any): IErrorResponse {
    try {
      return error.response.data as IErrorResponse;
    } catch (err) {
      return {
        error: err,
        message: 'Unhandled error',
        statusCode: 500,
      };
    }
  }

  private static getRequestConfig = () => {
    const token = localStorage.getItem('token');
    const requestConfig = { headers: {} };
    if (token) requestConfig.headers = { Authorization: `Bearer ${token}` };
    return requestConfig;
  };

  private static addFiltersToUrl<F extends IFilter = IFilter>(url: string, filter?: F): string {
    if (!filter) return url;
    const props = Object.keys(filter) as Array<keyof F>;
    let newUrl = `${url}?`;
    for (const prop of props) {
      newUrl += `${prop}=${filter[prop]}`;
    }
    return newUrl;
  }

  static async post<T>(url: string, body?: object): Promise<T | IErrorResponse> {
    return axios
      .post<T>(url, body, this.getRequestConfig())
      .then((response) => response.data)
      .catch((error) => Api.getError(error));
  }

  static async get<T, F extends IFilter = IFilter>(args: { url: string; filter?: F }): Promise<T | IErrorResponse> {
    const { filter, url } = args;
    return axios
      .get<T>(this.addFiltersToUrl(url, filter), this.getRequestConfig())
      .then((response) => response.data)
      .catch((error) => Api.getError(error));
  }

  static async delete<T>(url: string): Promise<T | IErrorResponse> {
    return axios
      .post<T>(url, this.getRequestConfig())
      .then((response) => response.data)
      .catch((error) => Api.getError(error));
  }

  static async put<T>(url: string, body?: object): Promise<T | IErrorResponse> {
    return axios
      .post<T>(url, body, this.getRequestConfig())
      .then((response) => response.data)
      .catch((error) => Api.getError(error));
  }
}

export default Api;
